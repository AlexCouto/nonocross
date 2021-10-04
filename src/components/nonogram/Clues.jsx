import React, {useMemo} from "react";
import "../../styles/styles.css"


export default function Clues(props) {
  const ct = props.type
  const [iSize, jSize] = props.size
  const colorMatrix = props.colorMatrix

  const clueArray = useMemo(() => {
    let clueRagArray = []
    
    let [outerSize, innerSize] = (ct === 'left' ? [iSize, jSize]
      : [jSize, iSize])

    for(let outer = 0; outer < outerSize; outer++) {
      let curColor = "empty"
      let curLength = 0
      let scanLine = []
      for(let inner = 0; inner < innerSize; inner++) {
        const color = (ct === 'left' ? colorMatrix[outer][inner] :
          colorMatrix[inner][outer])
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
  }, [colorMatrix, ct, iSize, jSize])

  const clueInnerSize = useMemo(() => clueArray[0].length, [clueArray])

  let clueISize = (ct === 'left' ? iSize : clueInnerSize)
  let clueJSize = (ct === 'left' ? clueInnerSize : jSize)

  let clueMatrix = []

  for(let i = 0; i < clueISize; i++) {
    let clueRow = []
    for(let j = 0; j < clueJSize; j++) {
      const clue = (ct === 'left' ? clueArray[i][j] : clueArray[j][i])
      const bgColor = (clue.color !== "empty" ? clue.color : "#ffffff")
      clueRow.push(
        <td key={i + ',' + j}  className="nono_td">
          <button style={{background: bgColor}} className="nono_cell">{clue.val === 0 ? "" : clue.val}</button>
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
