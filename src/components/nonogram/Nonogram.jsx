import React, { useState, useMemo } from "react"
import ColorSelector from './ColorSelector'
//import ColorToggler from './ColorToggler'
import Clues from './Clues'
import Grid from './Grid'

export default function Nonogram(props) {
  const [resultMatrix, setResultMatrix] = useState([
    ["#ff0000", "empty", "#00ff00"],
    ["empty", "#ff0000", "empty"],
    ["#ff0000", "#ff0000", "#ff0000"]
  ])

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
  
  const [colorMatrix, setColorMatrix] = useState(
    resultMatrix.map((row) => (row.map(() => ("empty"))))
  )

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

  function onCSClick(e, color, i) {
    setColorArrayStatus((colorArrayStatus) => {
      colorArrayStatus = colorArrayStatus.fill(false)
      colorArrayStatus[i] = true
      return [...colorArrayStatus]
    })
    setPenColor(color)
  }

  return <>
    <ColorSelector colorArray={colorArray} colorArrayStatus={colorArrayStatus} 
      onColorSelectClick={onCSClick}/>
    <div className="nono_container">
      <table className="nono_table nono_top">
        <tbody>
          <tr className="nono_tr">
            <td className="nono_td nono_top">{/*<ColorToggler/>*/}</td>
            <td className="nono_td nono_top"><Clues type="top" size={nonoSize} resultMatrix={resultMatrix}/></td>
          </tr>
          <tr className="nono_tr">
            <td className="nono_td nono_top"><Clues type="left" size={nonoSize} resultMatrix={resultMatrix}/></td>
            <td className="nono_td nono_top"><Grid onCellClick={onCellClick} colorMatrix={colorMatrix}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
}
