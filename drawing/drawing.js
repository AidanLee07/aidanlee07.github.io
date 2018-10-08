var canvas;
var ctx;
var unit = 4; 
window.onload = init; // When the window loads, run the init function
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    //drawGroundBlocks(10,10);
    //drawGroundBlock
    drawBrickBlocks(8,8);
    drawBrickBlock();
}