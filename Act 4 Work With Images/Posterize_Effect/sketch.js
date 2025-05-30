// Act 4: Work with Images
var img;

function preload() {
  img = loadImage("img.jpg");
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);

  image(img, 0, 0);  //Draws the loaded image (img) onto the canvas at the position (0, 0)

  var v = map(0, mouseY, width, 2, 20); // intensity depends on mouse

  filter(POSTERIZE, v); //v specifies the number of color levels used in the posterization
}