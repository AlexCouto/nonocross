import React from "react";
import '../../styles/styles.css'
// Todo: usar class do .css

export default function Cell(props) {
  return (
    <button className="nono_cell"
      onMouseDown={(e) => props.onCellClick(e)}
      onMouseEnter={()=> props.onCellEnter()}
      style={{backgroundColor: (props.color!=="empty"?props.color:"#ffffff")}}
    ></button>
  )
}
