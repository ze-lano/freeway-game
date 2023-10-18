// car variables
let xCars = [600, 600, 600, -50, -100, -75];
let xCarsInitialPosition = [600, 600, 600, -100, -60, -75];
let xCarLimits = [-50, -50, -50, 600, 550, 680];
let yCars = [40, 97, 150, 210, 263, 318];
let carVelo = [-2, -1.5, -3.2, 2, 1.5, 3.2];
let carInitialVelo = [-2, -1.5, -3.2, 2, 1.5, 3.2];
let carVeloIncrease = [-0.7, -0.5, -0.3, 0.5, 0.2, 0.3];
let carWidth = 50, carHeight = 40;
let hit = false;
let score = 0, bestScore = 0;

function showCar() {
    for (let i = 0; i < carImages.length; i++) {
        image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
    }
}

function moveCar() {
    for (let i = 0; i < carImages.length; i++) {
        xCars[i] += carVelo[i];
    }
    loopCar();
}

function loopCar() {
    for (let i = 0; i < carImages.length; i++) {
        if (i < 3) {
            if (xCars[i] < xCarLimits[i]) {
                xCars[i] = xCarsInitialPosition[i]
                if (abs(carVelo[i]) < 10) carVelo[i] += carVeloIncrease[i];
            }
        } else {
            if (xCars[i] > xCarLimits[i]) {
                xCars[i] = xCarsInitialPosition[i]
                if (carVelo[i] < 10) carVelo[i] += carVeloIncrease[i];
            }
        }
    }
}

function checkCollision() {
    for (let i = 0; i < carImages.length; i++) {
        hit = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xCow, yCow, 15, 15);
        if (hit) {
            xCow = cowInitialPosition[0];
            yCow = cowInitialPosition[1];
            hit = false;
            score = 0;
            refreshVelocity();
        }
    }
}

function refreshScore() {
    if (yCow < 15){
        score++;
        xCow = cowInitialPosition[0];
        yCow = cowInitialPosition[1];
        if (score > bestScore) {
            bestScore = score;
        }
    }
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(score, 100, 27);
    text(bestScore, 400, 27);
}

function refreshVelocity() {
    for (let i = 0; i < carImages.length; i++) {
        carVelo[i] = carInitialVelo[i];
    }
}