import React, {useMemo, useState} from "react";
import { useResultMatrixContext } from "../../context/ResultMatrixContext";
import "../../styles/styles.css"
import { useHoverContext } from "../../context/HoverContext";


export default function Clues(props) {
  const ct = props.type
  const [iSize, jSize] = props.size
  const [resultMatrix,] = useResultMatrixContext()
  const changeColor = props.changeColor
  const [hover] = useHoverContext()
  
  const [crossArray, setCrossArray] = useState(
    Array.from({
      length:50
    }, () => new Array(50).fill(false))
    //clueArray.map((row) => (row.map(() => false)))
  )

  const clueArray = useMemo(() => {
    setCrossArray(Array.from({
      length:50
    }, () => new Array(50).fill(false)))
    let clueRagArray = []
    
    let [outerSize, innerSize] = (ct === 'left' ? [iSize, jSize]
      : [jSize, iSize])

    for(let outer = 0; outer < outerSize; outer++) {
      let curColor = "empty"
      let curLength = 0
      let scanLine = []
      for(let inner = 0; inner < innerSize; inner++) {
        const color = (ct === 'left' ? resultMatrix[outer][inner] :
          resultMatrix[inner][outer])
        if(color !== curColor) {
          if(curColor !== "empty") {
            scanLine.push({val:curLength, color:curColor})
          }
          curColor = color
          curLength = 1
        } else {
          curLength++
        }
      }
      if(curColor !== "empty") {
        scanLine.push({val:curLength, color:curColor})
      }
      clueRagArray.push(scanLine)
    }
    const maxInnerSize = Math.max(...clueRagArray.map((line) => (line.length)))

    clueRagArray.forEach((line) => {
      let len = line.length
      for(let i = 0; i < maxInnerSize - len; i++) {
        line.unshift({val:0, color:"empty"})
      }
    })
    return clueRagArray
  }, [resultMatrix, ct, iSize, jSize])

  const clueInnerSize = clueArray[0].length

  

  // useEffect( () => {
  //   //const c = clueArray
  //   console.log(clueArray)
  //   setCrossArray(
  //     //console.log(clueArray)
  //     clueArray.map((row) => (row.map(() => false)))
  //     //console.log(crossArray)
  //   )
  //   //console.log(crossArray)
  //   //return crossArray
  // }, [clueArray])

  function onClueClick(e, i, j, cluecolor, cluenum) {
    if(cluenum !== 0) {
      if(e.button === 0) {
        changeColor(cluecolor)
      } else if(e.button === 2) {
        setCrossArray((crossArray) => {
          crossArray[i][j] = !crossArray[i][j]
          return [...crossArray]
        })
      }
    }
  }

  let clueISize = (ct === 'left' ? iSize : clueInnerSize)
  let clueJSize = (ct === 'left' ? clueInnerSize : jSize)

  // let clueMatrix = []
  // console.log(clueArray)
  // console.log(crossArray)

  const clueMatrix = []
  // setCrossArray(
  //   //console.log(clueArray)
  //   clueArray.map((row) => (row.map(() => false)))
  //   //console.log(crossArray)
  // )
  for(let i = 0; i < clueISize; i++) {
    let clueRow = []
    for(let j = 0; j < clueJSize; j++) {
      const clue = (ct === 'left' ? clueArray[i][j] : clueArray[j][i])
      const cross = (ct === 'left' ? crossArray[i][j] : crossArray[j][i])
      const bgColor = (clue.color !== "empty" ? clue.color : "#ffffff")
      clueRow.push(
        <td key={i + ',' + j}  className="nono_td">
          <button
            onMouseDown={(e)=>{
              onClueClick(e, (ct==='left'?i:j), (ct==='left'?j:i), bgColor, clue.val)}
            }
            onContextMenu={(e)=>{e.preventDefault()}}
            style={{
              background: bgColor,
              color: props.fontColor[bgColor],
              backgroundSize: 'cover',
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage: (cross===true
                ? (props.fontColor[bgColor]==="#000000"
                  ? "url('cross.gif')"
                  : "url('crossinv.gif')")
                : "none")
            }} 
            className={ ct === 'left'
              ? ( hover[0] === i ? "nono_cell hovered" : "nono_cell" )
              : ( hover[1] === j ? "nono_cell hovered" : "nono_cell")
            }
          >
            {clue.val === 0 ? "\u00A0" : clue.val}
          </button>
        </td>
      )
    }
    clueMatrix.push(<tr key={i.toString()}>{clueRow}</tr>)
  }
  
  return (
    <table className="nono_table">
      <tbody>
        {clueMatrix}
      </tbody>
    </table>
  )
}
