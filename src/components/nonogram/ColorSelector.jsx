import React from "react";

export default function ColorSelector(props) {
  const divArray = props.colorArray.map((color, i) => {
    return <div key={color} className={"nono_td_selector"}>
      <button
        className={props.penColor===color ? "nono_cell color_selector selected"
          :"nono_cell color_selector"} 
        style={{backgroundColor: color, color: props.fontColor[color]}}
        onClick={()=>{props.changeColor(color)}}
      >
        {i+1}
      </button>
    </div>
  })
  return (
    <div>
      {divArray}
    </div>
  )
}
