import React from "react";
// Todo: usar class do .css

export default function Cell(props) {
  return (
    <button className="nonogram-cell"
      onClick={() => {props.onClick()}}
      style={{backgroundColor: props.color}}
    ></button>
  )
}
