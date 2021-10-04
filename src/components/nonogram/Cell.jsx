import React from "react";
import '../../styles/styles.css'
// Todo: usar class do .css

export default function Cell(props) {
  return (
    <button className="nono_cell"
      onClick={() => {props.onClick()}}
      style={{backgroundColor: props.color}}
    ></button>
  )
}
