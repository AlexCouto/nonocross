import React from "react";
import '../../styles/styles.css'
// Todo: usar class do .css

export default function Cell(props) {
  return (
    <button className="nono_cell"
      onClick={(e) => props.onCellClick(e)}
      style={{backgroundColor: (props.color!=="empty"?props.color:"#ffffff")}}
    ></button>
  )
}
