import React, { useState ,  useEffect, useMemo } from "react"
//import ColorSelector from './ColorSelector'
import ColorSelector from './ColorSelector'
//import ColorToggler from './ColorToggler'
import Clues from './Clues'
import Grid from './Grid'
import { useResultMatrixContext } from "../../context/ResultMatrixContext"
import HoverContextProvider from "../../context/HoverContext"
import colorLuminance  from "../../colorLuminance";

export default function Nonogram(props) {

  const [resultMatrix ] = useResultMatrixContext()

  const [colorMatrix, setColorMatrix] = useState(
    resultMatrix.map((row) => (row.map(() => ("empty"))))
  )
  const [fontColor , setfontColor] = useState({})

  const [penColor, setPenColor] = useState(
    "empty"
  )

  const colorArray = useMemo(() => {
    const uniqueColorArray = []
    for(const row of resultMatrix) {
      for(const color of row) {
        if(color !== "empty" && !uniqueColorArray.includes(color)) {
          uniqueColorArray.push(color)
        }
      }
    }
    return uniqueColorArray
  }, [resultMatrix])

  const [colorArrayStatus, setColorArrayStatus] = useState(
    colorArray.map(()=>false)
  )

  let nonoSize = [resultMatrix.length, resultMatrix[0].length]

  useEffect( () => {
    setColorMatrix( resultMatrix.map((row) => (row.map(() => ("empty")))))
    setPenColor("empty")
    setColorArrayStatus(colorArray.map(()=>false))
    setPenColor(colorArray[0])
  } , [resultMatrix, colorArray] )
  
  // Definindo cor da fonte do texto dentro da clue e do color selector
  useEffect( () => {
    let fontcolorDict = {}
    for(let i = 0 ; i < colorArray.length ; i++)
    {
      let text_color
      let cellColor = colorArray[i]

      // a partir da luminância da cor, escolher entre preto ou branco a cor de fonte que possuir
      // maior de contraste conforme https://www.w3.org/WAI/GL/wiki/Contrast_ratio
      if( colorLuminance(cellColor) > 0.179)
        text_color = "#000000"
      else
        text_color = "#ffffff"
      
      fontcolorDict[cellColor] = text_color
    }
    setfontColor(fontcolorDict)
  } , [resultMatrix , colorArray])
  

  // const [selectedColor, setSelectedColor] = useState(

  // )
  
  function checkIfWin(resultMatrix, colorMatrix) {
    for(let i = 0; i < nonoSize[0]; i++){
      for(let j = 0; j < nonoSize[1]; j++){
        const m1 = resultMatrix[i][j];
        const m2 = colorMatrix[i][j];
        if(m1 !== m2) {
          return false
        }
      }
    }
    return true
  }

  function onCellClick(e, i, j) {
    setColorMatrix((colorMatrix) => {
      if(colorMatrix[i][j] === penColor) {
        colorMatrix[i][j] = "empty"
      } else {
        colorMatrix[i][j] = penColor
      }
      if(checkIfWin(resultMatrix, colorMatrix)) {
        setTimeout(()=>alert("Você venceu!"),500)
      }
      return [...colorMatrix]
    })
  }

  function onKeyboardPress(event){
    let key = parseInt(event.key,10)
    if(!isNaN(key) && key <= colorArray.length && key > 0 )
    {
      setColorArrayStatus((colorArrayStatus) => {
        colorArrayStatus = colorArrayStatus.fill(false)
        colorArrayStatus[key-1] = true
        return [...colorArrayStatus]
      })
      setPenColor(colorArray[key-1])
    }
  }

  function onCSClick(e, color, i) {
    setColorArrayStatus((colorArrayStatus) => {
      colorArrayStatus = colorArrayStatus.fill(false)
      colorArrayStatus[i] = true
      return [...colorArrayStatus]
    })
    setPenColor(color)
  }

  return <div onKeyPress={onKeyboardPress}>
    <ColorSelector colorArray={colorArray} colorArrayStatus={colorArrayStatus} fontColor={fontColor}
      onColorSelectClick={onCSClick}/>
    <div className="nono_container">
      <table className="nono_table nono_top">
        <HoverContextProvider>
          <tbody>
            <tr className="nono_tr">
              <td className="nono_td nono_top" style={{backgroundColor: penColor}}>{/*<ColorToggler/>*/}</td>
              <td className="nono_td nono_top"><Clues type="top" size={nonoSize} resultMatrix={resultMatrix} colorArray={colorArray} fontColor={fontColor}/></td>
            </tr>
            <tr className="nono_tr">
              <td className="nono_td nono_top"><Clues type="left" size={nonoSize} resultMatrix={resultMatrix} colorArray={colorArray} fontColor={fontColor}/></td>
              <td className="nono_td nono_top"><Grid onCellClick={onCellClick} colorMatrix={colorMatrix}/></td>
            </tr>
          </tbody>
        </HoverContextProvider>
      </table>
    </div>
  </div>
}
