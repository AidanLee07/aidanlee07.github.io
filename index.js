var canvas;
var ctx;
var unit = 10;
var requestId;
var positionX = 0;
window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
      drawLlama(-1,0);
    //startAnimation();
}


function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLlama (positionX,0);
    positionX += 1;
    requestId = requestAnimationFrame(animationLoop);
    
}