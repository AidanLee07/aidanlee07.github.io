var canvas;
var unit = 25;

// 1. New variable for animation
var requestId;

// 2. position of the animation
var positionX =0;

window.onload = init; // When the window loads, run the init function

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // 3. Run the startAnimation function
    startAnimation();
}

// 4. Create startAnimation function
function startAnimation(){

   // 5. Start the animation using animation function
   requestID = requestAnimationFrame(animationLoop);

}
// 6. Create startAnimaion
function animationLoop(timestamp) {
// 7. Clears everthing in canvas
ctx.clearRect(1600, 0, canvas.width,canvas.height)
// 8.Draw image in canvas
secondMario();
// 9. Move image
positionX += 51;
//10. Call this function again 
requestId = requestAnimationFrame(animationLoop);
}