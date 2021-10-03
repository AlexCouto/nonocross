import React from "react"
import NonogramColorSelector from './nonogramColorSelector'
import NonogramColorToggler from './nonogramColorToggler'
import NonogramNumberClues from './nonogramNumberClues'
import NonogramGrid from './nonogramGrid'

export default class Nonogram extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <>
      <NonogramColorSelector/>
      <table>
        <tr>
          <td><NonogramColorToggler/></td>
          <td><NonogramNumberClues/></td>
        </tr>
        <tr>
          <td><NonogramNumberClues/></td>
          <td><NonogramGrid/></td>
        </tr>
      </table>
    </>
  }
}
