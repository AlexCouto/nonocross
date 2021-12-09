import React from 'react'
import Nonogram from './Nonogram'
import HoverContextProvider from "../../context/HoverContext"

export default function GamePage(props) {
  return (
    <HoverContextProvider>
      <Nonogram/>
    </HoverContextProvider>
  )
}
