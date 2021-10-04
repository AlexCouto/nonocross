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
    resultMatrix.map((row) => (row.map(() => ("#ffffff"))))
  )

  function onCellClick(e, i, j) {
    setColorMatrix((colorMatrix) => {
      if(colorMatrix[i][j] !== '#ffffff') {
        colorMatrix[i][j] = "#ffffff"
      } else {
        colorMatrix[i][j] = "#ff0000"
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
