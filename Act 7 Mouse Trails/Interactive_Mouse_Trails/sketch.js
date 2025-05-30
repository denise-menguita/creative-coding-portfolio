// Act 7: Mouse Trails
let trails = [];
let font;

// colors
var r;
var g;
var b;

function preload() {
  font = loadFont('GemunuLibre-Regular.ttf');
}

function setup() {
  createCanvas(800, 800);
  frameRate(30);
  textFont(font);
}

function draw() {
  background(0, 50);
  
  noStroke();
  fill(255, 255, 255, 10);
  textSize(50);
  text('Phosphenes', 260, height/2);
  
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 255
  
  let sza = random(20, 50);
  
  stroke(r,g,b);
  fill(r,g,b);
  trails.push(createVector(mouseX, mouseY));

  if (trails.length > 100) {
    trails.shift();
  }

  for (let i = 0; i < trails.length; i++) {
    let pos = trails[i];
    ellipse(pos.x, pos.y, sza, sza);
  }
}