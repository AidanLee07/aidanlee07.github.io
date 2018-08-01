var canvas;
var ctx;
window.onload = init; // When the window loads, run the init function
function wall(){
    ctx.fillStyle = 'black'; // Setting the colour of filling
    ctx.fillRect(350,480,10,60); // Drawing a rectangle
}

function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    wall();
}


