// Act 11: (Individual) Interactive Art
let prevX, prevY;
let textTrails = [];
let font;

function preload() {
  font = loadFont('PassionsConflict.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  prevX = mouseX;
  prevY = mouseY;
  
  // Text
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  noStroke();

  // Calculate mouse speed
  let speediskey = dist(mouseX, mouseY, prevX, prevY);

  let r = map(speediskey, 0, 50, 50, 255);
  let g = map(mouseX, 0, width, 100, 255);
  let b = map(mouseY, 0, height, 150, 255);
  let alpha = map(speediskey, 0, 50, 50, 200);

  fill(r, g, b, alpha);
  let sizzler = map(speediskey, 0, 50, 5, 40);
  ellipse(mouseX, mouseY, sizzler);

  // Add text trail if moving
  if (speediskey > 1) {
    textTrails.push({
      x: mouseX,
      y: mouseY,
      alpha: 255
    });
  }
  
  // Soft fade effect
  fill(0, 10);
  rect(0, 0, width, height);

  // Draw and update text trails
  textFont(font);
  
  for (let i = textTrails.length - 1; i >= 0; i--) {
    let t = textTrails[i];
    fill(255, t.alpha);
    text("Denise", t.x, t.y);
    t.alpha -= 3;

    if (t.alpha <= 0) {
      textTrails.splice(i, 1); // remove faded text
    }
  }
  
  // update previous position
  prevX = mouseX;
  prevY = mouseY;
}