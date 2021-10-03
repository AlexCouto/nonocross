import React, {useMemo} from "react";

export default function Clues(props) {
  const ct = props.ct
  const [iSize, jSize] = props.size
  const colorMat = props.colorMatrix

  const clueArray = useMemo(() => {
    let clueRagArray = []
    
    let [outerSize, innerSize] = (ct === 'left' ? [iSize, jSize]
      : [jSize, iSize])

    for(let outer = 0; outer < outerSize; outer++) {
      let curColor = "empty"
      let curLength = 0
      let scanLine = []
      for(let inner = 0; inner < innerSize; inner++) {
        const color = (ct === 'left' ? colorMat[outer][inner] :
          colorMat[inner][outer])
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
    const maxInnerSize = Math.max(...clueRagArray.map((line) => (length(line))))

    clueRagArray.forEach((line) => {
      for(let i = 0; i < maxInnerSize; i++) {
        line.unshift({val:0, color:"empty"})
      }
    })
    return clueRagArray
  }, [])

  const clueInnerSize = useMemo(() => length(clueArray[0]))

  let clueISize = (ct === 'left' ? iSize : clueInnerSize)
  let clueJSize = (ct === 'left' ? clueInnerSize : jSize)

  let clueMatrix = []

  for(let i = 0; i < clueISize; i++) {
    let clueRow = []
    for(let j = 0; j < clueJSize; j++) {
      let clue = (ct === 'left' ?  : )
      
      clueRow.push(<td>{}</td>)
    }
    clueMatrix.push(<tr>{clueRow}</tr>)
  }
  
  return (
    <table>
      {clueMatrix}
    </table>
  )
}
