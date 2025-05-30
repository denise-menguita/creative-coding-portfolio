// text
let mic;
let color = "white";
let welcome = "Welcome to Bath Spa University!";
let font;

// C,D,E,F,G,A,B,C (mid)
var lowC, lowD, lowE, lowF, lowG;
var midC, midD, midE, midF, midG;
var highD, highE, highF, highG;
var highCs, highDs, highFs, highGs; // sharp

function preload() {
  font = loadFont('Chivo-Italic.ttf');
  
  // low
  lowC = loadSound("Low C.mp3");
  lowD = loadSound("Low D.mp3");
  lowE = loadSound("Low E.mp3");
  lowF = loadSound("Low F.mp3");
  lowG = loadSound("Low G.mp3");
  
  // mid
  midC = loadSound("Mid C.mp3");
  midD = loadSound("Mid D.mp3");
  midE = loadSound("Mid E.mp3");
  midF = loadSound("Mid F.mp3");
  midG = loadSound("Mid G.mp3");
  
  // high
  highC = loadSound("Highest C.mp3");
  highD = loadSound("High D.mp3");
  highE = loadSound("High E.mp3");
  highF = loadSound("High F.mp3");
  highG = loadSound("High G.mp3");
  
  // high sharp - black keys
  highCs = loadSound("High C Sharp.mp4");
  highDs = loadSound("High D Sharp.mp3");
  highFs = loadSound("High F Sharp.mp3");
  highGs = loadSound("High G Sharp.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Welcome to text
  mic = new p5.AudioIn();
  mic.start();
  textFont(font);
  textAlign(CENTER, CENTER);
  fill(color);
  
  // keys
  strokeWeight(1);
  
  // sounds
  lowC.setVolume(1); lowD.setVolume(1); lowE.setVolume(1); lowF.setVolume(1); lowG.setVolume(1);
  
  midC.setVolume(1); midD.setVolume(1); midE.setVolume(1); midF.setVolume(1); midG.setVolume(1);
  
  highD.setVolume(1); highE.setVolume(1); highF.setVolume(1); highG.setVolume(1);
}

function draw() {
  background(20, 38, 77);

  // Draw 26 white keys
  fill(255);
  push();
  translate(windowWidth/3.3, 0);
    let key1 = rect(0, 650, 38, 650);
    let key2 = rect(38, 650, 38, 650);
    let key3 = rect(76, 650, 38, 650);
    let key4 = rect(114, 650, 38, 650);
    let key5 = rect(152, 650, 38, 650);
    let key6 = rect(190, 650, 38, 650);
    let key7 = rect(228, 650, 38, 650);
    let key8 = rect(266, 650, 38, 650);
    let key9 = rect(304, 650, 38, 650);
    let key10 = rect(342, 650, 38, 650);
    let key11 = rect(380, 650, 38, 650);
    let key12 = rect(418, 650, 38, 650);
    let key13 = rect(456, 650, 38, 650);
    let key14 = rect(494, 650, 38, 650);
    let key15 = rect(532, 650, 38, 650); // C3
    let key16 = rect(570, 650, 38, 650); // blank

  // Add labels to white keys (C,D,E,F,G,A,B pattern repeating)
  fill(0);
  push();
  translate(5, 20);
    textSize(16);
    text("C1", 15, 795);
    text("D1", 52, 795);
    text("E1", 90, 795);
    text("F1", 128, 795);
    text("G1", 166, 795);
    text("A1", 204, 795);
    text("B1", 242, 795);
    text("C2", 280, 795);
    text("D2", 318, 795);
    text("E2", 356, 795);
    text("F2", 394, 795);
    text("G2", 432, 795);
    text("A2", 470, 795);
    text("B2", 508, 795);
    text("C3", 546, 795);
  pop();

  // Draw black keys (skip after E and B)
  fill(0);
  let bkey1 = rect(25, 650, 25, 120);   // C#
  let bkey2 = rect(63, 650, 25, 120);   // D#
  // skip E–F
  let bkey3 = rect(138, 650, 25, 120);  // F#
  let bkey4 = rect(176, 650, 25, 120);  // G#
  let bkey5 = rect(214, 650, 25, 120);  // A#
  // skip B–C
  let bkey6 = rect(290, 650, 25, 120);  // C#
  let bkey7 = rect(328, 650, 25, 120);  // D#
  // skip E–F
  let bkey8 = rect(404, 650, 25, 120);  // F#
  let bkey9 = rect(442, 650, 25, 120);  // G#
  let bkey10 = rect(480, 650, 25, 120);  // A#
  // skip B–C
  let bkey11 = rect(556, 650, 25, 120);  // C#

    // Add labels to black keys
    fill(255);
    push();
    translate(10, 0);
    textSize(12);
      text("C#1", 27, 710);
      text("D#1", 65, 710);
      text("F#1", 140, 710);
      text("G#1", 178, 710);
      text("A#1", 216, 710);
      text("C#2", 292, 710);
      text("D#2", 330, 710);
      text("F#2", 405, 710);
      text("G#2", 442, 710);
      text("A#2", 482, 710);
      text("C#3", 558, 710);
    pop();
  pop();
  
  // text
  let micLevel = mic.getLevel();
  let sizeIncrease = map(micLevel, 0, 1, 40, 200);
  textSize(sizeIncrease);
  text(welcome, width / 2, height/2.5);
  
}

function mousePressed(){
    // 🔲 Check black keys first
    if (mouseX > windowWidth/3.3+25 && mouseX < windowWidth/3.3+63 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > windowWidth/3.3+63 && mouseX < windowWidth/3.3+101 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > windowWidth/3.3+138 && mouseX < windowWidth/3.3+176 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > windowWidth/3.3+176 && mouseX < windowWidth/3.3+214 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > windowWidth/3.3+214 && mouseX < windowWidth/3.3+252 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > windowWidth/3.3+290 && mouseX < windowWidth/3.3+328 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > windowWidth/3.3+328 && mouseX < windowWidth/3.3+360 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > windowWidth/3.3+404 && mouseX < windowWidth/3.3+442 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > windowWidth/3.3+442 && mouseX < windowWidth/3.3+480 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > windowWidth/3.3+480 && mouseX < windowWidth/3.3+515 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > windowWidth/3.3+556 && mouseX < windowWidth/3.3+594 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > windowWidth/3.3+594 && mouseX < windowWidth/3.3+632 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > windowWidth/3.3+670 && mouseX < windowWidth/3.3+708 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > windowWidth/3.3+708 && mouseX < windowWidth/3.3+746 && mouseY > 650 && mouseY < 770) {
      highDs.play();
    } else if (mouseX > windowWidth/3.3+746 && mouseX < windowWidth/3.3+784 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    } else if (mouseX > windowWidth/3.3+822 && mouseX < windowWidth/3.3+860 && mouseY > 650 && mouseY < 770) {
      highGs.play();
    } else if (mouseX > windowWidth/3.3+860 && mouseX < windowWidth/3.3+898 && mouseY > 650 && mouseY < 770) {
      highCs.play();
    } else if (mouseX > windowWidth/3.3+936 && mouseX < windowWidth/3.3+974 && mouseY > 650 && mouseY < 770) {
      highFs.play();
    }

    //  Then check white keys
    else if (mouseX > windowWidth/3.3+0 && mouseX < windowWidth/3.3+38 && mouseY > 650 && mouseY < 1300) {
      lowC.play();
    } else if (mouseX > windowWidth/3.3+38 && mouseX < windowWidth/3.3+76 && mouseY > 650 && mouseY < 1300) {
      lowD.play();
    } else if (mouseX > windowWidth/3.3+76 && mouseX < windowWidth/3.3+114 && mouseY > 650 && mouseY < 1300) {
      lowE.play();
    } else if (mouseX > windowWidth/3.3+114 && mouseX < windowWidth/3.3+152 && mouseY > 650 && mouseY < 1300) {
      lowF.play();
    } else if (mouseX > windowWidth/3.3+152 && mouseX < windowWidth/3.3+190 && mouseY > 650 && mouseY < 1300) {
      lowG.play();
    } else if (mouseX > windowWidth/3.3+190 && mouseX < windowWidth/3.3+228 && mouseY > 650 && mouseY < 1300) {
      midC.play();
    } else if (mouseX > windowWidth/3.3+228 && mouseX < windowWidth/3.3+266 && mouseY > 650 && mouseY < 1300) {
      midD.play();
    } else if (mouseX > windowWidth/3.3+266 && mouseX < windowWidth/3.3+304 && mouseY > 650 && mouseY < 1300) {
      midE.play();
    } else if (mouseX > windowWidth/3.3+304 && mouseX < windowWidth/3.3+342 && mouseY > 650 && mouseY < 1300) {
      midF.play();
    } else if (mouseX > windowWidth/3.3+342 && mouseX < windowWidth/3.3+380 && mouseY > 650 && mouseY < 1300) {
      midG.play();
    } else if (mouseX > windowWidth/3.3+380 && mouseX < windowWidth/3.3+418 && mouseY > 650 && mouseY < 1300) {
      highD.play();
    } else if (mouseX > windowWidth/3.3+418 && mouseX < windowWidth/3.3+456 && mouseY > 650 && mouseY < 1300) {
      highE.play();
    } else if (mouseX > windowWidth/3.3+456 && mouseX < windowWidth/3.3+494 && mouseY > 650 && mouseY < 1300) {
      highF.play();
    } else if (mouseX > windowWidth/3.3+494 && mouseX < windowWidth/3.3+532 && mouseY > 650 && mouseY < 1300) {
      highG.play();
    } else if (mouseX > windowWidth/3.3+532 && mouseX < windowWidth/3.3+570 && mouseY > 650 && mouseY < 1300) {
      highC.play();
    } else if (mouseX > windowWidth/3.3+570 && mouseX < windowWidth/3.3+608 && mouseY > 650 && mouseY < 1300) {
      highC.play();
    } else if (mouseX > windowWidth/3.3+608 && mouseX < windowWidth/3.3+646 && mouseY > 650 && mouseY < 1300) {
      lowE.play();
    } else if (mouseX > windowWidth/3.3+646 && mouseX < windowWidth/3.3+684 && mouseY > 650 && mouseY < 1300) {
      lowF.play();
    } else if (mouseX > windowWidth/3.3+684 && mouseX < windowWidth/3.3+722 && mouseY > 650 && mouseY < 1300) {
      lowG.play();
    } else if (mouseX > windowWidth/3.3+722 && mouseX < windowWidth/3.3+760 && mouseY > 650 && mouseY < 1300) {
      midC.play();
    } else if (mouseX > windowWidth/3.3+760 && mouseX < windowWidth/3.3+798 && mouseY > 650 && mouseY < 1300) {
      highD.play();
    } else if (mouseX > windowWidth/3.3+798 && mouseX < windowWidth/3.3+836 && mouseY > 650 && mouseY < 1300) {
      highD.play();
    } 
}