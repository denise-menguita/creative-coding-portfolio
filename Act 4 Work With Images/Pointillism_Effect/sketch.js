var img, x, y;

function preload() {
img = loadImage("img.jpg");
}

function setup() {
createCanvas (400, 600);
background(0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);
  
fill(c[0], c[1], c[2], 50); // array of values which is the red green blue colors and pass in the opacity value for the 4th one.
ellipse (x, y, 40, 40);

}