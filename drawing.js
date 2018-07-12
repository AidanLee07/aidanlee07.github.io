var canvas;
var ctx;
window.onload = init; // When the window loads, run the init function
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'blue'; // Setting the colour of filling
    ctx.fillRect(0,0,100,100); // Drawing a rectangle
    ctx.fillRect(0,0,200,100); //Drawing a rectangle
}