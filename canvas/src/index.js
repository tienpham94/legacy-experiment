import React, { Component } from "react"
import ReactDOM from "react-dom"

const App = () => <Canvas width={200} height={200} />

class Canvas extends Component {
  render() {
    const { width, height } = this.props
    return (
      <canvas width={width} height={height} style={{ outline: "1px solid" }} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
