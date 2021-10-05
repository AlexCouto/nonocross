import React from 'react'
import Cell from './Cell'
import '../../styles/styles.css'
import { useHoverContext } from '../../context/HoverContext'

export default function Grid(props) {

  const [hover,setHover] = useHoverContext()

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
              <td key={i + ',' + j} className='nono_td'>
                <Cell
                  onCellClick={(e) => props.onCellClick(e, i, j)}
                  onCellEnter={() => onEnterHandler(i,j)}
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
