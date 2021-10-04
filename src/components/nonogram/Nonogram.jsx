import React, { useState ,  useEffect } from "react"
//import ColorSelector from './ColorSelector'
//import ColorToggler from './ColorToggler'
import Clues from './Clues'
import Grid from './Grid'
import { useResultMatrixContext } from "../../context/ResultMatrixContext"

export default function Nonogram(props) {

  const [resultMatrix, setResultMatrix ] = useResultMatrixContext()

  const [colorMatrix, setColorMatrix] = useState([])
  
  let nonoSize = ([resultMatrix.length, resultMatrix[0].length])

  useEffect( () => {
    let matrix = []
    for (let i = 0; i < nonoSize[0]; i++){
        let row = []
      for(let j = 0; j < nonoSize[1] ; j++){
        row.push("#ffffff")
      }
      matrix.push(row)
    }

    setColorMatrix(matrix)

  } , [resultMatrix] )

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
