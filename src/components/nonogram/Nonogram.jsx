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
  
  const [colorMatrix, setColorMatrix] = useState([
    ["#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff"],
    ["#ffffff", "#ffffff", "#ffffff"]
  ])

  let nonoSize = [resultMatrix.length, resultMatrix[0].length]

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
