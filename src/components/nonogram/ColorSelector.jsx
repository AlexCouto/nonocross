import React from "react";

export default function ColorSelector(props) {
  const divArray = props.colorArray.map((color, i) => {
    
    return <div className={"nono_td"}>
      <button 
        className={props.colorArrayStatus[i] ? "nono_cell color_selector selected"
          :"nono_cell color_selector"} 
        style={{backgroundColor: color}}
        onClick={(e)=>{props.onColorSelectClick(e, color, i)}}
      >
      </button>
    </div>
  })
  return (
    <div>
      {divArray}
    </div>
  )
}
