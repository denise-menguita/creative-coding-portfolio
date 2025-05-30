// Act 6:Typography
let wood;
let needle;
let song;
let font;

function preload() {
  // load wood texture image
  wood = loadImage('wood.jpg'); // Photo by Pixabay: https://www.pexels.com/photo/brown-surface-301717/
  
  // load needle image
  needle = loadImage('needle.png'); 
  
  font = loadFont('UnifrakturCook.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  background(wood); 
  song = loadSound('I Like U.mp3');
  
  // Text
  textFont(font);
  
  // draw needle image
  image(needle, 590, 70);
}

function draw() {
  // Vinyl
  /// red circle
  fill(194, 57, 49);
  noStroke();
  circle(width/2, height/2.1, 200);
  
  /// outline
  noFill();
  strokeWeight(2);
  stroke(0);
  ellipse(width/2, height/2.1, 715);
  
  /// knob
  fill(242, 239, 235);
  stroke(222, 218, 213);
  ellipse(width/1.13, 870, 130);
  ellipse(width/1.13, 870, 80);
  
  // logo
  fill(212, 174, 133);
  stroke(0);
  textSize(40);
  textAlign(LEFT);
  text("Denise Marielle", 35, 965);
  
  // rotating text
  textAlign(CENTER);
  textSize(210);
  for (let i = 0; i < 800; i = i+1) {
    fill(178+177 * sin(i/21 + frameCount/20),
        178+177 * sin(i/21 + frameCount/30),
        178+177 * sin(i/21 + frameCount/40));
  }
  
  translate(width/2, height/2.1);
  rotate(frameCount*0.02);
  stroke(0);
  text("I Like U", 0, 0);
}

// pause/play music
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}