import React, { Component } from "react"
import ReactDOM from "react-dom"

const App = () => (
  <Canvas
    width={200}
    height={200}
    draw={(canvas, context) => {
      context.strokeRect(0, 0, canvas.width, canvas.height)
    }}
  />
)

class Canvas extends Component {
  componentDidMount() {
    const context = this.canvas.getContext("2d") //Need 2d context to draw
    this.props.draw(this.canvas, context)
  }

  render() {
    const { width, height } = this.props
    return (
      <canvas
        ref={node => (this.canvas = node)}
        width={width}
        height={height}
        style={{ outline: "1px solid" }}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
