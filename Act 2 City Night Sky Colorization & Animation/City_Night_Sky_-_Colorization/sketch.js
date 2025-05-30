// Denise Marielle Menguita & Muhammad Farid Mian
// Act 2: City Night Sky Colorization & Animation

let bg1,bg2; // for gradient background
let glowColor;
let glowWindow;
let buildingColorNight; // building color

function setup() {
  createCanvas(400, 400);
  bg1 = color(100, 139, 179); // blue at top of gradient
  bg2 = color(214, 106, 60);
  
  // make sun glow
  glowColor = color(230, 136, 69);
  
  // window glow
  glowWindow = color(252, 177, 78);
  
  // building color
  buildingColorNight = color(23, 17, 14); // night
}

function draw() {
  // Gradient Background
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newbg = lerpColor(bg1,bg2,n);
    stroke(newbg);
    line(0,y,width, y);
  }
  
  // Sun
  noStroke();
  fill(glowColor);
  ellipse(width/2, 350, 140, 140);

  // Create glowing effect by drawing semi-transparent shapes multiple times
  for (let i = 0; i < 10; i++) {
    let alpha = map(i, 5, 10, 15, 0); // Decrease opacity gradually
    fill(red(glowColor), green(glowColor), blue(glowColor), alpha);
    ellipse(width/2, 350, 140 + i * 10, 140 + i * 10);
  }
  
  // Buildings
  stroke(0);
  fill(buildingColorNight);
  
  // buildings on the left
  push();
  translate(0, 150);
  rect(25, 0, 125, 250); // big building behind
  // --- Windows for the big building using nested loops --- 
    let cols = 4;      // windows across
    let rows = 5;      // windows down (to reach the base)
    let w = 13;        // window width
    let h = 10;        // window height
    let xStart = 35;   // x position of first window
    let yStart = 20;   // y position of first window
    let xGap = 30;     // horizontal spacing between windows
    let yGap = 50;     // vertical spacing between rows
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let x = xStart + col * xGap;
        let y = yStart + row * yGap;
        rect(x, y, w, h);
      }
    }
    // ---
  rect(0, 100, 50, 150);
  rect(50, 70, 20, 20);
  // ----- Windows for the Small Building
  rect(5, 118, 13, 10);
  rect(5, 168, 13, 10);
  rect(5, 218, 13, 10);
  rect(30, 118, 13, 10);
  rect(30, 168, 13, 10);
  rect(30, 218, 13, 10);
  // -----
  rect(50, 50, 50, 200);
  // ---- Windows for the Medium Building
  rect(57, 68, 13, 10);
  rect(57, 118, 13, 10);
  rect(57, 168, 13, 10);
  rect(57, 218, 13, 10);
  rect(78, 68, 13, 10);
  rect(78, 118, 13, 10);
  rect(78, 168, 13, 10);
  rect(78, 218, 13, 10);
  // ----
  line(85, 0, 85, -90);
  pop();
  
  // buildings on the right
  push();
  translate(250, 150);
  rect(0, 150, 50, 100);
  // Windows for the Small Building
  rect(5, 170, 13, 10);
  rect(5, 210, 13, 10);
  rect(28, 170, 13, 10);
  rect(28, 210, 13, 10);
  // -----
  rect(50, 50, 50, 200);
  // Windows for the Medium Building
  rect(55, 68, 13, 10);
  rect(55, 108, 13, 10);
  rect(55, 148, 13, 10); // will glow
  rect(55, 188, 13, 10);
  rect(80, 68, 13, 10);
  rect(80, 108, 13, 10);
  rect(80, 148, 13, 10);
  rect(80, 188, 13, 10);
  // -----
  rect(100, 0, 50, 250);
  // windows for the big building
  rect(105, 15, 13, 10);
  rect(105, 55, 13, 10);
  rect(105, 95, 13, 10);
  rect(105, 135, 13, 10);
  rect(105, 175, 13, 10);
  rect(105, 215, 13, 10);
  rect(130, 15, 13, 10);
  rect(130, 55, 13, 10); // will glow
  rect(130, 95, 13, 10);
  rect(130, 135, 13, 10);
  rect(130, 175, 13, 10);
  rect(130, 215, 13, 10);
  //----
  // door for the medium building
  rect(60, 210, 30, 50);
  strokeWeight(3);
  point(82, 230);
  //-----
  pop();
  
  // Window Glow - Left
  noStroke();
  push();
  translate(0, 150);
  // make window glow
  fill(glowWindow);
  rect(57, 68, 13, 10);

  // Create the glowing effect by drawing semi-transparent shapes multiple times
  for (let i = 0; i < 4; i++) {
    let alpha = map(i, 3, 10, 15, 0); // Decrease opacity gradually
    fill(red(glowWindow), green(glowWindow), blue(glowWindow), alpha);
    ellipse(60, 68, 13 + i * 10, 10 + i * 10);
  }
  pop();
  
  // Window Glow - Right
  push();
  translate(250, 150);
  fill(glowWindow);
  rect(130, 55, 13, 10);
  
  for (let i = 0; i < 4; i++) {
    let alpha = map(i, 3, 10, 15, 0); // Decrease opacity gradually
    fill(red(glowWindow), green(glowWindow), blue(glowWindow), alpha);
    ellipse(130, 55, 13 + i * 10, 10 + i * 10);
  }
  pop();
}