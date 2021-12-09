import React from "react";
import '../../styles/styles.css'
// Todo: usar class do .css

export default function Cell(props) {
  return (
    <button className="nono_cell"
      onMouseDown={(e) => props.onCellClick(e)}
      onContextMenu={(e) => {e.preventDefault()}}
      onMouseEnter={()=> props.onCellEnter()}
      style={{
        backgroundColor: (props.color!=="empty" && props.color!=="crossed" ?
                          props.color : "#ffffff"),
        backgroundImage: (props.color==="crossed" ? "url('cross.gif')" : "none"),
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    ></button>
  )
}
