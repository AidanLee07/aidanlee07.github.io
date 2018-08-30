var canvas;
var ctx;
window.onload = init; // When the window loads, run the init function
function block1(){

}

function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'blue'; // Setting the colour of filling
    ctx.fillRect(0,0,100,100); // Drawing a rectangle
    ctx.fillRect(0,0,200,100); //Drawing a rectangle
    ctx.fillRect(0,0,300,100); //Drawing a rectangle
    ctx.strokeStyle = 'blue'; 
    ctx.lineWidth = 10;
    ctx.strokeRect(100,200,15,15);
    ctx.font = "normal bold 50px monospace";
    // ctx.font = [font-style] [font-weight] [font-size] [font-family]
    ctx.fillText("Aidan",300,200);
}