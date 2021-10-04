import React, { useState } from "react"
//import ColorSelector from './ColorSelector'
//import ColorToggler from './ColorToggler'
import Clues from './Clues'
import Grid from './Grid'

export default function Nonogram(props) {
  const [resultMatrix, setResultMatrix] = useState([
    ["#ff0000", "empty", "#ff0000"],
    ["empty", "#ff0000", "empty"],
    ["#ff0000", "#ff0000", "#ff0000"]
  ])
  
  let nonoSize = [resultMatrix.length, resultMatrix[0].length]
  
  const [colorMatrix, setColorMatrix] = useState(
    resultMatrix.map((row) => (row.map(() => ("empty"))))
  )

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
      if(colorMatrix[i][j] !== 'empty') {
        colorMatrix[i][j] = "empty"
      } else {
        colorMatrix[i][j] = "#ff0000"
      }
      if(checkIfWin(resultMatrix, colorMatrix)) {
        setTimeout(()=>alert("Você venceu!"),1)
      }
      return [...colorMatrix]
    })
  }

  return <>
    {/*<ColorSelector/>*/}
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
