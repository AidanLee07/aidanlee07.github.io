var canvas;
var ctx;
var unit = 30;
window.onload = init; // When the window loads, run the init function
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(5*unit,0,6*unit,unit);
    ctx.fillRect(4*unit,1*unit,10*unit,unit);
    ctx.fillRect(4*unit,7*unit,8*unit,1*unit);
    ctx.fillRect(3*unit,8*unit,10*unit,1*unit);
    ctx.fillRect(2*unit,10*unit,12*unit,1*unit);
    ctx.fillRect(2*unit,9*unit,12*unit,1*unit);
    ctx.fillStyle = "rgb(255,196,0)";
    ctx.fillRect(4*unit,2*unit,7*unit,unit);
    ctx.fillRect(4*unit,3*unit,9*unit,unit);
    ctx.fillRect(4*unit,4*unit,10*unit,unit);
    ctx.fillRect(5*unit,5*unit,7*unit,unit);
    ctx.fillRect(5*unit,6*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,10*unit,2*unit,1*unit);
    ctx.fillRect(2*unit,11*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(12*unit,10*unit,2*unit,1*unit);
    ctx.fillRect(11*unit,11*unit,3*unit,1*unit);
    ctx.fillRect(12*unit,12*unit,2*unit,1*unit);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(9*unit,2*unit,1*unit,2*unit); 
    ctx.fillRect(10*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,5*unit,4*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)";
    ctx.fillRect(4*unit,2*unit,3*unit,1*unit);
    ctx.fillRect(5*unit,3*unit,1*unit,2*unit);
    ctx.fillRect(4*unit,5*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,3*unit,1*unit,2*unit);
    ctx.fillRect(6*unit,4*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(70,0,255)";
    ctx.fillRect(6*unit,7*unit,1*unit,3*unit);
    ctx.fillRect(9*unit,7*unit,1*unit,3*unit);
    ctx.fillRect(7*unit,9*unit,2*unit,1*unit);
    ctx.fillRect(5*unit,10*unit,6*unit,1*unit);
    ctx.fillRect(5*unit,11*unit,6*unit,1*unit);
    ctx.fillRect(4*unit,12*unit,8*unit,1*unit);
    ctx.fillRect(4*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(9*unit,13*unit,3*unit,1*unit);
    ctx.fillStyle = "rgb(252,249,0)"
    ctx.fillRect(6*unit,10*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,10*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)"
    ctx.fillRect(3*unit,14*unit,3*unit,1*unit);
    ctx.fillRect(10*unit,14*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,15*unit,4*unit,1*unit);
    ctx.fillRect(10*unit,15*unit,4*unit,1*unit);

  




}