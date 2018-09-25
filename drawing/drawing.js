var canvas;
var ctx;
var unit = 4; 
window.onload = init; // When the window loads, run the init function
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    //drawGroundBlocks(10,10);
    //drawGroundBlock
    ctx.save();
    ctx.translate(0,440);
    drawIceBlocks(300,300);
    ctx.restore();
}