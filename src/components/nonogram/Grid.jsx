import React from 'react'
import Cell from './Cell'
import '../../styles/styles.css'
import { useHoverContext } from '../../context/HoverContext'
import { Tooltip  } from '@material-ui/core'

export default function Grid(props) {

  const [ ,setHover] = useHoverContext()

  function onEnterHandler(i,j)
  {
    setHover([i,j])
  }
  function onLeaveHandler()
  {
    setHover([null,null])
  }

  return (
    <table className='nono_table' onMouseLeave={()=>onLeaveHandler()}>
      <tbody>
        {props.colorMatrix.map((row, i) => (
          <tr key={i.toString()} className='nono_tr'>
            {row.map((color, j) => (
              <Tooltip title={"("+(i+1)+","+(j+1)+")"}  placement="right-start">
                <td key={i + ',' + j} className='nono_td'>
                  <Cell
                    onCellClick={(e) => props.onCellClick(e, i, j)}
                    onCellEnter={() => onEnterHandler(i,j)}
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
