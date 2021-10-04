import React, { useState } from "react"
//import ColorSelector from './ColorSelector'
//import ColorToggler from './ColorToggler'
import Clues from './Clues'
import Grid from './Grid'

export default function Nonogram(props) {
  const [resultMatrix, setResultMatrix] = useState([
    ["#ff0000", "#ff0000"],
    ["#ff0000", "#ff0000"]
  ])
  
  const [colorMatrix, setColorMatrix] = useState([
    ["#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff"]
  ])

  let nonoSize = [2,2]

  function onCellClick(e, i, j) {
    setColorMatrix((colorMatrix) => {
      colorMatrix[i][j] = "#ff0000"
      return colorMatrix
    })
  }

  return <>
    {/*<ColorSelector/>*/}
    <table>
      <tbody>
        <tr>
          <td>{/*<ColorToggler/>*/}</td>
          <td><Clues type="top" size={nonoSize} colorMatrix={resultMatrix}/></td>
        </tr>
        <tr>
          <td><Clues type="left" size={nonoSize} colorMatrix={resultMatrix}/></td>
          <td><Grid onCellClick={onCellClick} colorMatrix={colorMatrix}/></td>
        </tr>
      </tbody>
    </table>
  </>
}
