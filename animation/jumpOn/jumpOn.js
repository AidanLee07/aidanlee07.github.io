var canvas;
var ctx;
var requestId;

var time = 0;
var positionX = 0;
var unit = 25;
var positionY = 25 * unit;
var isJumping = true;

const timeLoop = 10;
const speed = 10;
const jumpspeed = 3;
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


    requestId = requestAnimationFrame(animationLoop);
}
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, positionY);
    ctx.scale(0.3, 0.3);
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
        ctx.fillRect(0, 0, 1600, 800);
        ctx.save();
        ctx.scale(0.3, 0.3);
        ctx.translate(0, 2500);
        drawGroundBlocks(20, 4);
        ctx.restore();
    }
    function changePositionY() {
        const jumpPosition = canvas.width / 4;
        const peakPosition = canvas.width / 2;
        const landPosition = canvas.width * 3 / 4;
        if ((jumpPosition <= positionX) && (positionX < peakPosition)) {
            positionY -= jumpspeed;
        } else if ((peakPosition < positionX) && (positionX <= landPosition)) {
            positionY += jumpspeed;
        }


    }

    function changeJump() {
        if ((canvas.width/3 <= positionX) && (positionX <= 2*canvas.width/3)) {
            isJumping = true;
        } else {
            isJumping = false;
        }
    }