var canvas;
var ctx;
var requestId;

var positionX = 0;
var time = 20;

const timeLoop = 10;
const speed = 10;

function animationLoop(timestamp) {

    // 7. Clears everthing in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawCharacter();
    changePositionX();
    changeTime();
}
function drawCharacter() {
}

function changePositionX() {
    if (positionX == canvas.width) {
        positionX = 0
    } else {
        positionX += speed

    }



}
function changeTime() {
    if(timeLoop == 10){
        
    }
} 