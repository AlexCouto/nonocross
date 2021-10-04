import React from "react";

export default function ColorSelector(props) {
  const divArray = props.colorArray.map((color) => (
    <div className="nono_td">
      <button className="nono_cell" style={{backgroundColor: color}}
        onClick={(e)=>{props.onColorSelectClick(e, color)}}
      ></button>
    </div>
  ))
  return (
    <div>
      {divArray}
    </div>
  )
}
