// Act 5: Pattern
var circleSize = 80;

let colors = [ // array of colors
  "#b82727",
  "#cc692f",
  "#dbba23",
  "#60b32d",
  "#2881bd",
  "#393bad"
];

function setup() {
  createCanvas(windowWidth, windowHeight); // fit the browser window
  frameRate(8);
}

function draw() {
  background(0);
  
  translate(circleSize / 2, circleSize / 2); // Translate the origin

  for (var x = 0; x < width; x += circleSize) {
    for (var y = 0; y < height; y += circleSize) {
      // Outer circle
      fill(random(colors)); // randomize fill using colors from the array
      ellipse(x, y, random(circleSize * 1.1, circleSize * 1.4), random(circleSize * 1.1, circleSize * 1.4)); // randomize size within range
      
      // Middle circle
      fill(random(colors)); // randomize fill using colors from the array
      ellipse(x, y, random(circleSize * 0.6, circleSize * 0.8), random(circleSize * 0.6, circleSize * 0.8)); // randomize size within range

      // Inner circle
      fill(random(colors)); // randomize fill using colors from the array
      ellipse(x, y, random(circleSize * 0.3, circleSize * 0.4), random(circleSize * 0.3, circleSize * 0.4)); // randomize size within range
    }
  }
}