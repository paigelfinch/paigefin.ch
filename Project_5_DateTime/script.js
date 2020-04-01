let font
let graphic
let textColor

const waveInput = document.querySelector("input.wave")
const dxInput = document.querySelector("input.dx")
const dyInput = document.querySelector("input.dy")

function preload() {
  font = loadFont("SpaceGrotesk-Medium.otf")
}

if (new Date().getHours() < 12) {
  textColor = "#45b6fe";
} else {
  textColor = "#296d98";
}

function setup() {
  createCanvas(1200, 600)

  createCopy()
}

function draw() {
  background("#ebe2d8")

  const tileSize = 10

  for(let x = 0; x < 120; x = x + 1) {
    for(let y = 0; y < 60; y = y + 1) {

      const wave = waveInput.value
      const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.3) * dxInput.value
      const distortionY = sin(frameCount * wave + x * 0.5 + y) * dyInput.value

      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize
      const sh = tileSize

      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

function createCopy() {
  graphic = createGraphics(1200, 600)

  if (new Date().getHours() < 12) {
    text = "Good\nMorning"
  } else if (new Date().getHours() < 17) {
    text = "Good\nAfternoon"
  } else {
    text = "Good\nEvening"
  }

  graphic.fill(textColor)
  graphic.textSize(300)
  graphic.textAlign(CENTER, CENTER)
  graphic.textFont(font)
  graphic.textLeading(200)
  graphic.text(text, 600, 300)
}
