var canvas;
var ctx;
var requestId;


var time = 0;
var positionX = 0;
var unit = 25;

const timeLoop = 12;
const speed = 5;

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
    changeTime();
    positionX += 1;
    requestId = requestAnimationFrame(animationLoop);
}
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, 12 * unit);
    ctx.scale(0.3, 0.3);
    if ((0 <= time) && (time < timeLoop/2)){
     drawMario2();
    } else if ((timeLoop/2 <= time)&&(time<=timeLoop)){
       drawMario3();
    }
    ctx.restore();
}
function changePositionX() {
    if (positionX < canvas.width) {
        positionX += speed;
    } else {
        positionX = -10*unit;
    }
}
function changeTime() {
    if (time == timeLoop) {
        time = 0;
    } else {
        time += 1;
    }
} 

function drawBackground(){
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.fillRect(0,0,1600,600);
    ctx.save();
    ctx.scale(0.3,0.3);
    ctx.translate(0,1400);
    drawGroundBlocks(20,4);
    ctx.restore();
}