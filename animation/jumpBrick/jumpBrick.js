var canvas;
var ctx;
var requestId;
var time = 0;
var positionX = 0;
var unit = 7;
var positionY = 103 * unit;
var isJumping = true;
var brickTime = 0;

const timeLoop = 10;
const speed = 10;
const jumpspeed = 1*unit;
const jumpPosition = 60 * unit;
const peakPosition = 110 * unit;
const landPosition = 160 * unit;
window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // 3. Run the startAnimation function
    startAnimation();
}
function startAnimation() {
    requestID = requestAnimationFrame(animationLoop);
}

function animationLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    walkingAnimation();
    changePositionX();
    changePositionY();
    changeTime();
    changeJump();
    drawRuler(10);
    brickAnimation();
    requestId = requestAnimationFrame(animationLoop);
}
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, positionY);
    if (isJumping == false) {
        if ((0 <= time) && (time < timeLoop / 2)) {
            drawMario2();
        } else if ((timeLoop / 2 <= time) && (time <= timeLoop)) {
            drawMario3();
        }
    } else if (isJumping == true) {
        drawMario3();
    }
    ctx.restore();
}
function changePositionX() {
    if (positionX < canvas.width) {
        positionX += speed;
    } else {
        positionX = -10 * unit;
        brickTime = 0
    }
}
function changeTime() {
    if (time == timeLoop) {
        time = 0;
    } else {
        time += 1;
    }
}

function drawBackground() {
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(0, 118 * unit);
    drawGroundBlocks(15, 1);
    ctx.restore();
    ctx.save();
    ctx.translate(46 * unit, 51 * unit);
     drawBrickBlocks(4, 1);
    ctx.restore();
    ctx.save();
    ctx.translate(125 * unit, 51 * unit);
     drawBrickBlocks(3, 1);
    ctx.restore();
}
function changePositionY() {
    if ((jumpPosition <= positionX) && (positionX < peakPosition)) {
        positionY -= jumpspeed;
    } else if ((peakPosition < positionX) && (positionX <= landPosition)) {
        positionY += jumpspeed;
    }
}

function changeJump() {
    if ((canvas.width / 3 <= positionX) && (positionX <= 2 * canvas.width / 3)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

function brickAnimation() {
    const halfBrickTime = 10;
    ctx.save();
    ctx.translate(110 * unit, 51 * unit);
    if (positionX >= peakPosition) {
        brickTime += 1;
        if (brickTime <= halfBrickTime) {
            ctx.translate(0, 10 * -brickTime);
        } else if (brickTime <= 2 * halfBrickTime) {
            ctx.translate(0, -200 + 10 * brickTime);
        }
        drawBrickBlocks(1, 1);
    } else {
        drawBrickBlocks(1, 1);
    }
    ctx.restore();
}