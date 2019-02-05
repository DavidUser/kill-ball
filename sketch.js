const width = 400
const height = 400
const small = 10
const big = 100
var radius
var x, y
var speed = 1
var alert = false

function setup() { 
  createCanvas(width, height);
  radius = small;
  x = Math.random() * width;
  y = Math.random() * height;
  frameRate(speed);
} 

function mouseClicked() {
  if (
    mouseX > (x - radius) && mouseX < (x + radius) &&
    mouseY > (y - radius) && mouseY < (y + radius)
  ) {
    radius = small
    x = Math.random() * width;
    y = Math.random() * height;
    speed++;
    alert = false
    frameRate(speed);
  }
}

function draw() { 
  background(220);
  if (alert) {
    fill(color(255,0,0))
  } else {
    fill(color(255,255,255))
  }
  ellipse(x, y, radius, radius);
  radius += 3
  if (radius > big) {
    radius = small
    x = Math.random() * width;
    y = Math.random() * height;
    alert = true
  }
}