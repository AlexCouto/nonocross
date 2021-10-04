import React from "react";

export default function ColorSelector(props) {
  const divArray = props.colorArray.map((color, i) => {
    let className = "nono_td"
    if(props.colorArrayStatus[i]===true) {
      className += " selected"
    }
    return <div className={className}>
      <button className="nono_cell color_selector" style={{backgroundColor: color}}
        onClick={(e)=>{props.onColorSelectClick(e, color, i)}}
      ></button>
    </div>
  })
  return (
    <div>
      {divArray}
    </div>
  )
}
