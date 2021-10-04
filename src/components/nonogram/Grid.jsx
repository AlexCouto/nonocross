import React from 'react'
import Cell from './Cell'

export default function Grid(props) {
  return (
    <table>
      <tbody>
        {props.colorMatrix.map((row, i) => (
          <tr key={i.toString()}>
            {row.map((color, j) => (
              <td key={i + ',' + j}>
                <Cell
                  onClick={(e) => props.onCellClick(e, i, j)}
                  color={color}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
