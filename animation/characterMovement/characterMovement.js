var canvas;
var unit = 10;
var isFacingRight = true;

// 1. New variable for animation
var requestId;

// 2. position of the animation
var positionX = 0;
var positionY = 0;
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

}
// 6. Create startAnimaion
function animationLoop(timestamp) {

    // 7. Clears everthing in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //8.Draw image in canvas
    // ctx.fillRect(positionX, 0, 50, 50)
    wall();
    if (isFacingRight == true) {
        secondMario;
    } else if (isFacingRight == false) {
        ctx.save();
        ctx.scale(-1, 1)
        secondMario();
        ctx.restore();
    }
    ctx.save();
    ctx.translate(positionX, 600 + positionY);
    secondMario();
    ctx.restore();


    // 9. Move image
    // Changes isFacingRight if it hits the border.
    if (positionX == canvas.width - 120) {
        isFacingRight = false
    } else if (positionX == 0) {
        isFacingRight = true
    }
    //Changes the x coordinates based on isFacingRight
    if (isFacingRight == true) {
        positionX += 10;
        //jump
        if (positionX > canvas.width / 4 && positionX < canvas.width / 2) {
            positionY -= 3;
        } else if (positionX > canvas.width / 2 && positionX < 3 * canvas.width / 4) {
            positionY += 3;
        }
    } else if (isFacingRight == false) {
        positionX -= 10;
        // Jump when facing left.
        if (positiony > canvas.width / 4 && positionY < canvas.width / 2) {
            positionY -= 3;
        } else if (positiony > canvas.width / 2 && positionY < 3 * canvas.width / 4) {
            positionY += 3;
        }
    }

    //  //Coming back to x=0 when it hits the border
    if (positionX == canvas.width) {
        positionX = 0;
    } else {
        positionX += 5;
    }
    if (isFacingRight == true) {
        positionX += 1;
    } else if (isFacingRight == false) {
        positionX = 0;
    }

    //10. Call this function again 
    requestId = requestAnimationFrame(animationLoop);
}