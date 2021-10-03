import React from 'react'
import NonogramCell from './nonogramCell'

export default function NonogramGrid(props) {
  const 
  render() {
    const cells = (
      <table>
        {this.props.colorGrid.map((row) => (
          <tr>
            {row.map((color) => (
              <td>
                <div className="nonogram-cell" onClick={this.onClick}
                  style={{backgroundColor: color}}>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </table>
    )

    return (
      {cells}
    )
  }
}
