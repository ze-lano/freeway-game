let xLim = 500, yLim = 400;


function setup() {
  createCanvas(xLim, yLim);
  preload();
}

function draw() {
  background(streetImage);
  showCow();
  showCar();
  moveCow();
  moveCar();
  checkCollision();
  refreshScore();
}

