// Act 8: Audio Visualization
let ocean;
var song;
var particles = []

function preload(){
  song = loadSound("Nobody Gets Me.mp3");
  
  // load ocean image
  ocean = loadImage('ocean.jpg'); // Photo by Matt Hardy: https://www.pexels.com/photo/body-of-water-under-blue-and-white-skies-1533720/
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  
  ocean.filter(BLUR, 5)
}

function draw() {
  background(ocean);
  
  // Beat detection for particles
  fft.analyze()
  amp = fft.getEnergy (20,200) // frequency range
  
  // Make bg responsive 
  push()
  if (amp > 233){
    translate(random(-4, 4), random(-5, 5));
  }
  
  image(ocean, 0, 0, width, height)
  pop()
  
  // transparent black rect that reacts to amp
  var alpha = map(amp, 0, 255, 230, 180)
  fill(0, alpha);
  noStroke();
  rect(0, 0, windowWidth, windowHeight);
  
  // Waves
  strokeWeight(3);
  stroke(255);
  
  var wave = fft.waveform();
  
  for(var i = 0; i < width; i++){
    var index = floor(map(i, 0, width, 0, wave.length))
    
    var x = i;
    var y = wave[index] * 300 + height/2;
    point(x,y);
  }
  
  translate(width/2, height/2)
  
  var p = new Particle()
  particles.push(p)
  
  for (var i = 0; i < particles.length; i++){
    particles[i].update(amp > 230)
    particles[i].show()
  }
}

// toggle play/pause on mouse click
function mouseClicked(){
  if(song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}

class Particle {
  constructor(){
    this.pos = p5.Vector.random2D().mult(160) // position
    this.vel = createVector(0, 0)
    this.acc = this.pos.copy().mult(random(0.001, 0.0001))
    
    this.w = random(3, 5)
  }
  
  update(cond){
    this.vel.add(this.acc)
    this.pos.add(this.vel) // add velocity to position
    if (cond){
      this.pos.add(this.vel)
      this.pos.add(this.vel)
      this.pos.add(this.vel)
    }
  }
  show(){
    noStroke()
    fill(255)
    ellipse(this.pos.x, this.pos.y, this.w)
  }
}