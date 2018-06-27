const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

// c.fillStyle = "rgba(66,66,66,0.4)"
// c.fillRect(100, 100, 100, 100)

// c.fillStyle = "green"
// c.fillRect(300, 300, 100, 100)

// console.log(canvas)

/// Line
/// Need to begin path
// c.beginPath()
// c.moveTo(50, 300) // Still invisible before we call stroke()
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = "#666" // Before stroke(), to style stroke
// c.stroke()

/// Arc - circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

/// Programmatically draw
// for (let index = 0; index < 4; index++) {
//   const x = Math.random() * window.innerWidth
//   const y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false)
//   c.strokeStyle = "blue"
//   c.stroke()
// }

// ANIMATION
var circleArray = []

for (var i = 0; i < 100; i++) {
  let radius = 30
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerWidth - radius * 2) + radius
  let dx = Math.random() - 0.5
  let dy = Math.random() - 0.5 // velocity
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = "blue"
    c.stroke()
    c.fill()
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

const circle = new Circle(200, 200, 3, 3, 30)

// Animation works by refreshing the page and increment something very small
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight) // clear canvas

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()
