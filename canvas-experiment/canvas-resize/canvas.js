const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

c.fillStyle = "rgba(66,66,66,0.4)"
c.fillRect(100, 100, 100, 100)

c.fillStyle = "green"
c.fillRect(300, 300, 100, 100)

console.log(canvas)

/// Line
/// Need to begin path
c.beginPath()
c.moveTo(50, 300) // Still invisible before we call stroke()
c.lineTo(300, 100)
c.lineTo(400, 300)
c.strokeStyle = "#666" // Before stroke(), to style stroke
c.stroke()

/// Arc - circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

/// Programmatically draw
for (let index = 0; index < 4; index++) {
  const x = Math.random() * window.innerWidth
  const y = Math.random() * window.innerHeight
  c.beginPath()
  c.arc(x, y, 30, 0, Math.PI * 2, false)
  c.strokeStyle = "blue"
  c.stroke()
}
