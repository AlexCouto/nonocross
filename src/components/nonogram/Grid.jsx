import React from 'react'
import Cell from './Cell'

export default function Grid(props) {

  return (
    <table>
      {props.colorMatrix.map((row, i) => (
        <tr>
          {row.map((color, j) => (
            <td>
              <Cell
                key={i + ',' + j}
                onClick={(e) => onCellClick(e, i, j)}
                color={color}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
