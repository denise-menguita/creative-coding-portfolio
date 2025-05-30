// Denise Marielle Menguita
// CC Year 1 Group 3
// uses beginShape(), endShape(), translate(), bezierVertex(), push(), pop(), scale(), and rotate()

var ref;
let font;
function preload() {
  //ref = loadImage("alien1.png");
  font = loadFont('BigShoulders-Bold.ttf');
}

function setup() {
  createCanvas(400, 640);
  //background(ref);
  background(32, 32, 43);
  angleMode(DEGREES);
}

function draw() {
  // border
  strokeWeight(4);
  stroke(255);
  fill(0,0,0,0);
  rect(20, 25, 360, 590);
  
  stroke(0);
  
  // shirt - under waist
  strokeWeight(2);
  fill(242, 239, 237); // off-white
  push();
    translate (70, 270);
    beginShape();
    vertex(20, 145);
    bezierVertex(45, 155, 0, 200, 5, 240);
    bezierVertex(50, 210, 55, 235, 80, 225);
    vertex(80, 225);
    bezierVertex(205, 190, 210, 183, 215, 188);
    bezierVertex(220, 188, 225, 175, 205, 140);
    endShape(CLOSE);
  pop();
  
  // hair
  fill(247, 121, 159); // pink
  ellipse(width/2.2, 240, 200, 220);
  
  // body
  fill(63, 159, 217); // blue
  push();
  translate(50, 270);
  
    /// neck
    strokeWeight(0);
    rotate(-10);
    rect(100, 20, 40, 55);
     
  strokeWeight(2);
    /// shoulder - right arm 
    beginShape();
      vertex(105, 60);
      bezierVertex(70, 90, 10, 40, 0, 95); // neck base, shoulder
      bezierVertex(0, 100, 40, 90, 60, 105); // chest
      bezierVertex(63, 100, 85, 100, 140, 105);
      vertex(160, 90);
      vertex(165, 60);
      bezierVertex(165, 60, 135, 65, 120, 60);
    endShape();

    /// waist
    beginShape();
      translate (10, 0);
      vertex(40, 180);
      bezierVertex(55, 210, 55, 250, 10, 300); // curve
      vertex(150, 290);
      vertex(160, 290);
      bezierVertex(160, 290, 180, 180, 190, 170); // hip to rib
    endShape(CLOSE);
  pop();
  
  // head
  strokeWeight(2);
  fill(63, 159, 217); // blue
  push();
    translate (70, 90);
  
    beginShape();
    vertex(70, 145);
    bezierVertex(65, 110, 10, 135, 70, 170); //ear
    vertex(70,170);
    vertex(70,190);
    vertex(130, 220);
    bezierVertex(140, 220, 245, 155, 140, 80);
    endShape(CLOSE);
  pop();
  
  // arm - peace sign
  push();
  translate (190, 50);
  beginShape();
    vertex(60, 320);
    bezierVertex(110, 300, 140, 260, 155, 220); // tricep
    vertex(160, 210); // elbow
    bezierVertex(160, 210, 120, 140, 65, 125); // elbow, forearm, wrist
    bezierVertex(50, 118, 65, 110, 58, 85); // palm
    vertex(40, 75);
    vertex(25, 20); // finger middle
    vertex(30, 75);
    vertex(0, 25); // finger pointer
    vertex(42, 130); // wrist inner
    bezierVertex(60, 155, 110, 210, 135, 220);
    bezierVertex(110, 210, 100, 255, 80, 255);
    vertex(80, 255); // shoulder
  endShape(CLOSE);
  pop();
  
  // shirt - over waist
  fill(242, 239, 237);
    push();
      translate (70, 270);
      beginShape();
        /// chest
        vertex(60, 90);
        bezierVertex(65, 88, 90, 88, 138, 80);
        vertex(155, 60);
        vertex(225, 70);
        bezierVertex(233, 85, 225, 105, 222, 125);
        vertex(195, 150);
  
        /// torso
        vertex(20, 145); 
        bezierVertex(45, 155, 0, 200, 5, 225);
        bezierVertex(12, 210, 43, 215, 38, 203);
        bezierVertex(40, 180, 77, 180, 85, 170);
      endShape(CLOSE);
  
      beginShape();
        vertex(180, 145);
        bezierVertex(180, 145, 200, 160, 220, 175);
        bezierVertex(220, 188, 225, 175, 205, 140);
      endShape();
    pop();
  
  // gun
  strokeWeight(2);
  fill(247, 121, 159); // pink
  push();
    translate (220, 270);
    /// handle
    beginShape();
    vertex(25, 70);
    vertex(45, 70);
    vertex(50, 160);
    vertex(20, 160);
    endShape(CLOSE);
  
    beginShape();
    vertex(25, 160);
    vertex(45, 160);
    vertex(45, 192);
    vertex(25, 192);
    endShape(CLOSE);
  pop();
    /// name
      push();
        stroke(255);
        fill(217, 111, 142);
        rotate(90);
        text('DENISE', width/1.15, -248);
      pop();
  
  // body
  push();
  fill(63, 159, 217); // blue
  translate(50, 270);
  rotate(-10); // neck
  translate (10, 0); // waist
    /// right hand
    translate (115, 105);
    beginShape();
      vertex(0, 35);
      vertex(12, 35);
      bezierVertex(13, 45, 17, 33, 27, 25);
      bezierVertex(27, 25, 35, 5, 50, 0); // thumb
      bezierVertex(55, 10, 37, 28, 40, 31);
      vertex(30, 31);
      bezierVertex(40, 31, 50, 37, 68, 40);
      bezierVertex(68, 40, 78, 35, 85, 40);
      vertex(78, 50); // middle finger
      bezierVertex(78, 50, 80, 60, 72, 64); // middle finger
      bezierVertex(72, 70, 40, 87, 13, 70);
      vertex(-15, 73);
    endShape(CLOSE);
  
    //// knuckles
    beginShape(); // pointer
      vertex(86, 42);
      bezierVertex(86, 44, 70, 55, 45, 50);
    endShape();
    beginShape(); // middle
      vertex(72, 62);
      bezierVertex(72, 62, 60, 67, 40, 60);
    endShape();
  pop();
  
    /// right arm
    push();
      fill(242, 239, 237);
      translate (55, 270);
      beginShape();
        vertex(0, 105);
        vertex(10, 95);
        bezierVertex(15, 95, 55, 80, 75, 90);
        vertex(75, 90);
        vertex(90, 100);
        bezierVertex(105, 93, 140, 120, 150, 115);
        bezierVertex(145, 120, 125, 175, 145, 190);
        bezierVertex(100, 160, 90, 165, 83, 158);
        bezierVertex(45, 145, 20, 138, 10, 110);
      endShape(CLOSE);

        //// wrinkle
        beginShape();
          vertex(40, 120);
          bezierVertex(40, 120, 65, 120, 90, 100); 
        endShape();
    pop();
  
  // pink shadow
  push();
  translate (0, 5);
  noStroke();
    /// antenna
    fill(224, 56, 129);

    push();
    translate (170+5, -15);
    beginShape();
    vertex(0, 170);
    bezierVertex(15, 100, 20, 80, 35, 90);
    bezierVertex(35, 90, 40, 95, 28, 100);
    vertex(10, 170);
    endShape(CLOSE);

    beginShape();
    translate (45, -5);
    vertex(0, 170);
    bezierVertex(15, 100, 20, 80, 35, 90);
    bezierVertex(35, 90, 40, 95, 28, 100);
    vertex(10, 170);
    endShape(CLOSE);
    pop();
  
  pop();
  
  // clothes - pants
  fill(201, 195, 191);
  push();
    translate (105, 530);
    beginShape();
    vertex(20, 30);
    bezierVertex(210, 0, 220, 50, 225, 110);
    vertex(0, 110);
    endShape(CLOSE);
  pop();
  
    /// zipper
    line(185, 560, 190, 610);
    line(200, 560, 205, 610);
  
  // face
  push();
  translate (150, 200);
  
    /// eyebrows
    beginShape();
    fill(68, 171, 126);
    vertex(20, 20);
    bezierVertex(20, 20, 40, 10, 57, 30);
    endShape(CLOSE);
  
    beginShape();
    fill(68, 171, 126);
    vertex(83, 32);
    bezierVertex(85, 28, 90, 20, 102, 23);
    endShape(CLOSE);
  
    /// eyes
  strokeWeight(2.5);
    line (20, 40, 50, 45);
    line (25, 42, 25, 45);
    line (30, 42, 30, 45);

    beginShape();
    fill(242, 239, 237); // off-white
    vertex(77, 47);
    bezierVertex(77, 47, 110, 20, 100, 45);
    endShape();
    fill(0);
    ellipse(90, 42, 5, 5);
  
    /// nose
    line (75, 45, 77, 55); // bridge
    line (77, 65, 74, 73); // tip
  
    /// mouth
    beginShape();
    vertex(60, 90);
    bezierVertex(60, 90, 70, 85, 75, 85);
    endShape();
  
    /// tongue 
    fill(247, 121, 159); // pink
    beginShape();
    vertex(60, 90);
    bezierVertex(58, 88, 60, 75, 70, 85);
    endShape();
  pop();
  
  // antenna
  fill(68, 171, 126);
  strokeWeight(2);
  
  push();
  translate (170, -15);
  beginShape();
    vertex(0, 170);
    bezierVertex(15, 100, 20, 80, 35, 90);
    bezierVertex(35, 90, 40, 95, 28, 100);
    vertex(10, 170);
  endShape(CLOSE);
  
  beginShape();
    translate (45, -5);
    vertex(0, 165);
    bezierVertex(15, 100, 20, 80, 35, 90);
    bezierVertex(35, 90, 40, 95, 28, 100);
    vertex(10, 170);
  endShape(CLOSE);
  pop();
  
  // hair clip
  fill(219, 182, 48);
  push();
    translate(135, 200);
    rotate(25);
    rect(0, 0, 33, 10, 5, 0, 0, 5); // x, y, w, h, radius top left, #, #, bottom left
  pop();
  
  // gun
  strokeWeight(2);
  fill(247, 121, 159); // pink
  push();
    translate (220, 270);
    rect(5, 0, 60, 70);
  
    /// circle - purple
    fill(80, 54, 150);
    ellipse(35, 35, 48, 50);
  
    /// circle - pink
    fill(237, 109, 173);
    push();
      translate (35, 35);
      ellipse(0, 0, 30, 30);
      ellipse(0, 0, 15, 15);
    pop();
  pop();
  
  // belt
  strokeWeight(2);
  fill(222, 80, 116);
  push();
    translate (120, 500);
    beginShape();
    vertex(10, 35);
    bezierVertex(15, 45, 100, 40, 125, 20);
    vertex(133, 50);
    bezierVertex(100, 65, 80, 71, 40, 72);
    vertex(0, 72);
    endShape(CLOSE);
  
    /// loop
    beginShape();
    vertex(90, 25);
    bezierVertex(90, 25, 120, 0, 120, 65);
    vertex(105, 70);
    endShape(CLOSE);
  pop();
  
    /// alien
    push();
      translate (240, 490);
      beginShape();
      vertex(0, 20);
      bezierVertex(30, 0, 80, 5, 90, 80);
      vertex(90, 80); // bottom right
      vertex(80, 95); // bottom left
      bezierVertex(80, 95, 5, 80, 0, 30);
      endShape(CLOSE);
  
      //// eyes
      fill(0);
      rotate(10);
      ellipse(50, 35, 30, 20);
  
      beginShape();
      vertex(65, 10);  // top outer corner
      //bezierVertex(65, 10, 80, 20, 72, 35);
      vertex(72, 35); // point
      vertex(80, 20);
      endShape(CLOSE);
    pop();
  
  // title
  strokeWeight(1);
  fill(255);
  textFont(font);
  textSize(17);
  text('DENISE MARIELLE', 150, 605);
  
  fill(54, 186, 166);
  push();
  scale (1.4, 1.4);
  translate(30, 250);
    /// A
    beginShape();
    vertex(40, 100);
    vertex(45, 100);
    vertex(43, 86);
    vertex(48, 86);
    vertex(50, 100);
    vertex(60, 100);
    vertex(63, 86);
    vertex(67, 86);
    vertex(65, 100);
    vertex(70, 100);
    vertex(70, 170);
    vertex(60, 170);
    vertex(60, 160);
    vertex(50, 158);
    vertex(48, 170);
    vertex(40, 170);
    endShape(CLOSE);

    /// L
    beginShape();
    vertex(78, 90);
    vertex(87, 92);
    vertex(85, 140);
    vertex(105, 142);
    vertex(105, 152);
    vertex(78, 160);
    endShape(CLOSE);

    /// I
    line(108, 105, 122, 97);
    ellipse(115, 100, 10, 10);

    beginShape();
    vertex(110, 120);
    vertex(120, 117);
    vertex(120, 165);
    vertex(110, 165);
    endShape(CLOSE);

    /// E
    beginShape();
    vertex(127, 98);
    vertex(160, 95);
    vertex(160, 110);
    vertex(135, 112);
    vertex(160, 120);
    vertex(160, 135);
    vertex(135, 143);
    vertex(160, 150);
    vertex(158, 162);
    vertex(127, 162);
    vertex(127, 135);
    vertex(140, 130);
    vertex(127, 120);
    endShape(CLOSE);

    /// N
    push();
    beginShape();
    vertex(165, 102);
    vertex(180, 100);
    vertex(185, 145);
    vertex(190, 143);
    vertex(193, 95);
    vertex(200, 95);
    vertex(197, 155);
    vertex(180, 160);
    vertex(175, 120);
    vertex(172, 120);
    vertex(170, 160);
    vertex(165, 160);
    endShape(CLOSE);
    pop();
  pop();
}