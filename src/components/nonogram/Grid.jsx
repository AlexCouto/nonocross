import React from 'react'
import Cell from './Cell'
import '../../styles/styles.css'

export default function Grid(props) {
  return (
    <table className='nono_table' cellpadding="0" cellSpacing="0">
      <tbody>
        {props.colorMatrix.map((row, i) => (
          <tr key={i.toString()} className='nono_tr'>
            {row.map((color, j) => (
              <td key={i + ',' + j} className='nono_td'>
                <Cell
                  onCellClick={(e) => props.onCellClick(e, i, j)}
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
