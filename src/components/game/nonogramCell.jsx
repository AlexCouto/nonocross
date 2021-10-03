import React from "react";
// Todo: usar class do .css

export default function NonogramCell(props) {
  
  return (
    <button className="nonogram-cell"
      onClick={this.props.onClick}
      style={{backgroundColor: this.props.color}}
    ></button>
  )
}
