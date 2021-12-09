import React from 'react'
import Cell from './Cell'
import '../../styles/styles.css'
import { Tooltip  } from '@material-ui/core'

export default function Grid(props) {
  return (
    <table className='nono_table' onMouseLeave={()=>props.onGridLeave()}>
      <tbody>
        {props.colorMatrix.map((row, i) => (
          <tr key={i.toString()} className='nono_tr'>
            {row.map((color, j) => (
              <Tooltip key={i + ',' + j} title={"("+(i+1)+","+(j+1)+")"}
                       placement="right-start">
                <td className='nono_td'>
                  <Cell
                    onCellClick={(e) => props.onCellClick(e, i, j)}
                    onCellEnter={(e) => props.onCellEnter(e, i, j)}
                    color={color}
                  />
                </td>
              </Tooltip>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
