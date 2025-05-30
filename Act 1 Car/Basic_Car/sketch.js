// Denise Marielle T. Menguita
// CC Year 1 Group 3

function setup() {
  createCanvas(750, 400);
  angleMode(DEGREES);
}

function draw() {
  background(163, 194, 209);
  /// sunset
  fill(255, 182, 92);
  ellipse(width/2.1, 240, 240, 240);
  
  // ground - asphalt
  fill(38, 38, 37);
  strokeWeight(0);
  rect(0, 300, 750);
  
  // ground - line
  stroke(255, 246, 237);
  push();
  translate(40, 0);
  for (var i=0; i < 6; i+=1) {
    fill(255, 246, 237);
    rect(120*i, 350, 70, 4); 
  }
  pop();
  
  // shadow
  strokeWeight(0);
  fill(0, 0, 0, 98);
  //rect(120, 300, 470, 120);
  
  beginShape();
  vertex(110, 300);
  bezierVertex(135, 500, 540, 500, 600, 300);
  endShape(CLOSE);
  
  fill(0, 0, 0, 95);
  ellipse (width/2, 350, width/1.8, 60);
  fill(10, 10, 10, 85);
  ellipse (width/2, 355, width/1.4, 65);
  
  // body
  fill(23, 50, 94);
  strokeWeight(2);
  stroke(255, 182, 92);
  //rect(70, 215, 520, 120, 60, 200, 40, 60);
  
  beginShape();
  vertex(86, 220);  //spoiler
  bezierVertex(140, 200, 280, 120, 390, 165);
  vertex(444, 220);  //windshield
  //bezier
  bezierVertex(440, 220, 560, 220, 630, 260); // headlight
  vertex(630, 327);
  vertex(610, 330);  //wheel-r2
  bezierVertex(610, 320, 570, 215, 505, 300);
  vertex(500, 330);  //wheel-r1
  vertex(230, 333);  //wheel-l2
  bezierVertex(230, 333, 160, 200, 120, 330);
  vertex(120, 330);  //wheel-l1
  bezierVertex(80, 310, 55, 270, 75, 250);
  endShape(CLOSE);
  
  // lines
  fill(0, 0, 0, 0);
  strokeWeight(2);
  stroke(20, 46, 74);
  beginShape();
  vertex(110, 250);
  bezierVertex(110, 250, 112, 265, 157, 272);
  endShape();
  
  beginShape();
  vertex(80, 295);
  bezierVertex(80, 250, 100, 255, 105, 320);
  endShape();
  
  line(200, 278, 240, 280);
  line(435, 300, 500, 300); //door-right wheel
  line(575, 280, 600, 270); //top of right wheel
  
  // headlight
  strokeWeight(0);
  fill(40, 40, 40);
  push();
  translate(550, 220);
  beginShape();
  vertex(20, 25);
  vertex(70, 40);
  vertex(70, 60);
  vertex(55, 55);
  endShape(CLOSE);
  pop();
  
  // diffuser
  fill(30, 30, 30);
  strokeWeight(0);
  beginShape();
  vertex(70, 290);
  bezierVertex(65, 295, 70, 340, 220, 345);
  endShape(CLOSE);
  
  // spoiler
  strokeWeight(3);
  stroke(40, 40, 40);
  line(100, 200, 110, 220);
  line(112, 195, 120, 210);
  
  beginShape();
  fill(40, 40, 40);
  vertex(125, 195);
  vertex(130, 200);
  bezierVertex(80, 200, 40, 190, 160, 190);
  endShape(CLOSE);
  
  // tail light
  fill(64, 11, 10);
  beginShape();
  strokeWeight(1);
  stroke(72, 73, 74);
  vertex(80, 230);  //tl
  vertex(128, 230);
  bezierVertex(130, 230, 130, 255, 70, 250);
  vertex(70, 250);  //br
  endShape(CLOSE);
  /// light
  ///strokeWeight(2);
  ///stroke(188, 227, 214);
  ///line (90, 230, 110, 245);
  
  // window
  fill(255, 228, 194);
  strokeWeight(2);
  stroke(72, 73, 74);
  beginShape();
  vertex(180, 190);  //tl
  bezierVertex(180, 190, 340, 120, 400, 215);
  vertex(200, 215);  //br
  endShape(CLOSE);
  
  stroke(165, 166, 168);
  line (230, 172, 245, 213);
  
  // windshield
  beginShape();
  vertex(390, 167);
  bezierVertex(370, 170, 380, 172, 420, 220);
  //vertex(380, 170);
  //vertex(420, 220);
  vertex(440, 220);
  endShape(CLOSE);
  
  /// light
  //fill(0, 0, 0, 0);
  //strokeWeight(3);
  //stroke(188, 227, 214);
  //beginShape();
  //vertex(200, 215);
  //bezierVertex(215, 200, 230, 195, 390, 205);
  //endShape();
  
  ///strokeWeight(4);
  ///stroke(196, 255, 236, 60);
  ///beginShape();
  ///vertex(200, 215);
  ///bezierVertex(215, 200, 230, 195, 390, 205);
  ///endShape();
  
  // gas
  strokeWeight(1);
  stroke(20, 46, 74);
  fill(23, 50, 94);
  ellipse (width/3.7, 240, 30, 25);
  
  // door handle
  strokeWeight(0);
  fill(18, 40, 64);
  ellipse(width/2.7, 240, 40, 10);
  
  //door
  fill(0, 0, 0, 0);
  beginShape();
  strokeWeight(2);
  stroke(17, 36, 56);
  vertex(240, 215);  //tl
  vertex(230, 225);
  bezierVertex(230, 300, 240, 310, 435, 310);
  vertex(435, 225);
  vertex(425, 220);  //r
  endShape();
  
  // intake
  line(420, 265, 480, 265);
  fill(40, 40, 40);
  strokeWeight(0);
  rect(450, 250, 30, 30, 5, 5, 70, 5);
  
  // bottom trim
  fill(174, 191, 207);
  strokeWeight(0);
  beginShape();
  vertex(240,330);
  bezierVertex(250, 330, 260, 315, 470, 330);
  vertex(470, 330);
  endShape();
  
  // wheels
  fill(40, 40, 40);
  ellipse (width/4.2, 320, 100, 100); //left wheel
  ellipse (width/1.35, 320, 100, 100);

  // wheel rim
  strokeWeight(4);
  stroke(82, 80, 79);
  fill(242, 196, 153);
  ellipse (width/4.2, 320, 70,70); //left wheel
  ellipse (width/1.35, 320, 70, 70);
  
  push();
  translate(5,0);
    // wheel lines - left
    strokeWeight(5);
    stroke(99, 98, 96);
    line (170, 288, 175, 352);
    line (150, 296, 198, 344);
    line (142, 320, 208, 320);
    line (195, 295, 150, 340);

  translate(12,0);
    // wheel lines - right
    line (540, 287, 535, 353);
    line (516, 294, 559, 345);
    line (506, 320, 570, 320);
    line (562, 295, 515, 340);
  pop();
  
  // wheel hub
  strokeWeight(0);
  fill(99, 98, 96);
  ellipse (width/4.2, 320, 25,25); //left wheel
  ellipse (width/1.35, 320, 25, 25);
}