var canvas;
var ctx;
var requestId;
var unit = 7;
var marioPositionX = 0;
var marioPositionY = 98;
var goombaPositionX = 215;
var goombaPositionY = 98;
var time = 0;
var isJumping = false;

const timeLoop = 10;
const speed = 1;
const jumpspeed = 1;
const jumpPosition = 60;
const peakPosition = 110;
const landPosition = 160;
window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // 3. Run the start
    startAnimation();
}
function startAnimation() {

    requestID = requestAnimationFrame(animationLoop);
}

function animationLoop(timestamp) {
    drawBackgrond();
    drawRuler(10);
    changeTime();
    changeMarioPositionX();
    marioWalkingAnimation();
    changeGoombaPositionX();
    goombaWalkingAnimation();
    changePositionY();
    changeJump();
    requestId = requestAnimationFrame(animationLoop);
}

function drawBackgrond() {
    ctx.fillStyle = "#5b8bff";
    ctx.fillRect(0, 0, 1600, 900);
    ctx.save();
    ctx.translate(0, 113 * unit);
    drawGroundBlocks(15, 1);
    ctx.restore();
}

function changeTime() {
    if (time == timeLoop) {
        time = 0;
    } else {
        time += 1;
    }
}

function changeMarioPositionX() {
    if (marioPositionX < 215) {
        marioPositionX += speed;
    } else {
        marioPositionX = -5;
    }
}

function marioWalkingAnimation() {
    if (isJumping == false) {
        if ((0 <= time) && (time < timeLoop / 2)) {
            drawMario2(marioPositionX, marioPositionY);
        } else if ((timeLoop / 2 <= time) && (time <= timeLoop)) {
            drawMario3(marioPositionX, marioPositionY);
        }
    } else if (isJumping == true) {
        drawMario3(marioPositionX,marioPositionY);
    }

}

function changeGoombaPositionX() {
    if (goombaPositionX > -3.5) {
        goombaPositionX -= speed;
    } else {
        goombaPositionX = 215;
    }
}

function goombaWalkingAnimation() {

    if ((0 <= time) && (time < timeLoop / 2)) {
        drawGoomba1(goombaPositionX, goombaPositionY);
    } else if ((timeLoop / 2 <= time) && (time <= timeLoop)) {
        drawGoomba2(goombaPositionX, goombaPositionY);
    }
}

function changePositionY() {

    if ((jumpPosition <= marioPositionX) && (marioPositionX < peakPosition)) {
        marioPositionY -= jumpspeed;
    } else if ((peakPosition <= marioPositionX) && (marioPositionX < landPosition)) {
        marioPositionY += jumpspeed;
    }
}

function changeJump() {
    if ((marioPositionX >= jumpPosition) && (marioPositionX <= landPosition)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

