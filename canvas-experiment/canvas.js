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

const mouse = {
  x: undefined,
  y: undefined
}

const maxRadius = 40
// const minRadius = 2

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x
  mouse.y = event.y
  console.log(mouse)
}) // Movemove event

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init()
}) // Think about resize

var colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#298089"]

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.minRadius = radius
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

  this.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
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

    //interactivity

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }

    this.draw()
  }
}

var circleArray = []
function init() {
  circleArray = []

  for (var i = 0; i < 800; i++) {
    let radius = Math.random() * 3 + 1
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerWidth - radius * 2) + radius
    let dx = Math.random() - 0.5
    let dy = Math.random() - 0.5 // velocity
    circleArray.push(new Circle(x, y, dx, dy, radius))
  }
}
// const circle = new Circle(200, 200, 3, 3, 30)

// Animation works by refreshing the page and increment something very small
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight) // clear canvas

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}
init()

animate()
