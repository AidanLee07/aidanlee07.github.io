var canvas;
var ctx;
// 1. New variable for animation
var requestId;
// 2. position of the animation
var positionX = 0;
var isFacingRight = true;
var unit = 10;

const speed = 50;
const mariowidth = 14*unit;

window.onload = init; // When the window loads, run the init function

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // 3. Run the startAnimation function
    startAnimation();
}

// 4. Create startAnimation function
function startAnimation() {
    // 5. Start the animation using animation function
    requestID = requestAnimationFrame(animationLoop);
    animationLoop();
}
// 6. Create startAnimaion
function animationLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharacter();
    changeFacingDirection();
    changePositionX();

    requestId = requestAnimationFrame(animationLoop);
}
function drawCharacter() {
    if (isFacingRight == true) {
        drawMario();
    } else if (isFacingRight == false) {
        ctx.save();
        ctx.translate(mariowidth, 1*unit);
        ctx.translate(positionX , canvas.height)
        ctx.scale(-1,1);
    }
    drawMario();
    ctx.restore();
}
// Change the facing direction depending in where the character is.
function changeFacingDirection() {
    if(positionX == canvas.width - mariowidth){
        isFacingRight = false;
    } else if (positionX == 0){
       isFacingRight  = true;
    }
}
// Change the x position depending on which direction the chracter is facing
function changePositionX() {
 if (isFacingRight == true){
    positionX += speed    
 } else if (isFacingRight == false){
    positionX -= speed    
 }
}

