// Act 9: Data Visualization
// https://www.kaggle.com/datasets/mohitbansal31s/dc-characters?resource=download

let data = ["New Earth", "Prime Earth", "Earth-One", "Earth-Two", "DC Animated Universe"];
let values = [292, 214, 70, 60, 47];
let barColors = [
  "#b32020",
  "#bd512a",
  "#5da62d",
  "#1e5e9e",
  "#2a289e"
];

let font;

function preload() {
  font = loadFont('Electrolize.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  textFont(font);
}

function draw() {
  drawBarChart();
}

function drawBarChart() {
  let barWidth = (width - 100) / data.length - 10; // Increased bar width
  let startX = 50;
  let startY = height;
  let cornerRadius = 10; // Rounded corners

  // Draw title
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(40);
  text("Top 5 DC Universes", width/2, 50);

  // Draw bars
  let maxValue = max(values);
  let hoveredBar = -1;
  
  for (let i = 0; i < data.length; i++) {
    let barHeight = map(values[i], 0, maxValue, 0, (height * 2) / 3);
    let x = startX + i * (barWidth + 10);
    let y = startY - barHeight;

    // Check if mouse is over a bar
    let isHovered = mouseX >= x && mouseX <= x + barWidth && mouseY >= y && mouseY <= startY;

    // Draw bar with stroke when hovering
    if (isHovered) {
      stroke(255);
      strokeWeight(3);
    } else {
      noStroke();
    }
    fill(barColors[i]);
    rect(startX + i * (barWidth + 10), startY - barHeight, barWidth, barHeight, cornerRadius);

    // Draw value labels
    noStroke();
    textSize(12);
    textAlign(CENTER);
    textStyle(NORMAL);
    fill(255);
    text(values[i] + " Characters", startX + i * (barWidth + 10) + barWidth / 2, startY - barHeight - 10);

    // Draw genre labels above each bar
    textSize(14);
    textAlign(CENTER, BOTTOM);
    text(data[i], startX + i * (barWidth + 10) + barWidth / 2, startY - barHeight - 20); // Genre name positioned above the bar
  }
}