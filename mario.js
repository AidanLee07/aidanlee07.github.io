var canvas;
var ctx;
var unit = 10;
window.onload = init; // When the window loads, run the init function
function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(5*unit,2*unit,6*unit,unit);
    ctx.fillRect(4*unit,3*unit,10*unit,unit);
    ctx.fillRect(4*unit,9*unit,8*unit,1*unit);
    ctx.fillRect(3*unit,10*unit,10*unit,1*unit);
    ctx.fillRect(2*unit,12*unit,12*unit,1*unit);
    ctx.fillRect(2*unit,11*unit,12*unit,1*unit);
    ctx.fillStyle = "rgb(255,196,0)";
    ctx.fillRect(4*unit,4*unit,7*unit,unit);
    ctx.fillRect(4*unit,5*unit,9*unit,unit);
    ctx.fillRect(4*unit,6*unit,10*unit,unit);
    ctx.fillRect(5*unit,7*unit,7*unit,unit);
    ctx.fillRect(5*unit,8*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(2*unit,13*unit,4*unit,1*unit);
    ctx.fillRect(2*unit,14*unit,2*unit,1*unit);
    ctx.fillRect(12*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(10*unit,13*unit,4*unit,1*unit);
    ctx.fillRect(10*unit,14*unit,4*unit,1*unit);

    
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(9*unit,4*unit,1*unit,2*unit); 
    ctx.fillRect(10*unit,6*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,7*unit,4*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)";
    ctx.fillRect(4*unit,4*unit,3*unit,1*unit);
    ctx.fillRect(5*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(4*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(6*unit,6*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(70,0,255)";
    ctx.fillRect(6*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(9*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(7*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(5*unit,12*unit,6*unit,1*unit);
    ctx.fillRect(5*unit,13*unit,6*unit,1*unit);
    ctx.fillRect(4*unit,14*unit,8*unit,1*unit);
    ctx.fillRect(4*unit,15*unit,3*unit,1*unit);
    ctx.fillRect(9*unit,15*unit,3*unit,1*unit);
    ctx.fillStyle = "rgb(252,249,0)"
    ctx.fillRect(6*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,12*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)"
    ctx.fillRect(3*unit,16*unit,3*unit,1*unit);
    ctx.fillRect(10*unit,16*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,17*unit,4*unit,1*unit);
    ctx.fillRect(10*unit,17*unit,4*unit,1*unit);

    ctx.fillStyle = "rgb(0,253,58)";
    ctx.fillRect(25*unit,2*unit,6*unit,unit);
    ctx.fillRect(24*unit,3*unit,10*unit,unit);
    ctx.fillRect(24*unit,9*unit,8*unit,1*unit);
    ctx.fillRect(23*unit,10*unit,10*unit,1*unit);
    ctx.fillRect(22*unit,12*unit,12*unit,1*unit);
    ctx.fillRect(22*unit,11*unit,12*unit,1*unit);
    ctx.fillStyle = "rgb(255,196,0)";
    ctx.fillRect(24*unit,4*unit,7*unit,unit);
    ctx.fillRect(24*unit,5*unit,9*unit,unit);
    ctx.fillRect(24*unit,6*unit,10*unit,unit);
    ctx.fillRect(25*unit,7*unit,7*unit,unit);
    ctx.fillRect(25*unit,8*unit,7*unit,1*unit);
    ctx.fillRect(22*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(22*unit,13*unit,4*unit,1*unit);
    ctx.fillRect(22*unit,14*unit,2*unit,1*unit);
    ctx.fillRect(32*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(30*unit,13*unit,4*unit,1*unit);
    ctx.fillRect(30*unit,14*unit,4*unit,1*unit);

    
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(29*unit,4*unit,1*unit,2*unit); 
    ctx.fillRect(30*unit,6*unit,1*unit,1*unit);
    ctx.fillRect(29*unit,7*unit,4*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)";
    ctx.fillRect(24*unit,4*unit,3*unit,1*unit);
    ctx.fillRect(25*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(24*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(23*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(26*unit,6*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(70,0,255)";
    ctx.fillRect(26*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(29*unit,9*unit,1*unit,3*unit);
    ctx.fillRect(27*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(25*unit,12*unit,6*unit,1*unit);
    ctx.fillRect(25*unit,13*unit,6*unit,1*unit);
    ctx.fillRect(24*unit,14*unit,8*unit,1*unit);
    ctx.fillRect(24*unit,15*unit,3*unit,1*unit);
    ctx.fillRect(29*unit,15*unit,3*unit,1*unit);
    ctx.fillStyle = "rgb(252,249,0)"
    ctx.fillRect(26*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(29*unit,12*unit,1*unit,1*unit);
    ctx.fillStyle = "rgb(75,33,0)"
    ctx.fillRect(23*unit,16*unit,3*unit,1*unit);
    ctx.fillRect(30*unit,16*unit,3*unit,1*unit);
    ctx.fillRect(22*unit,17*unit,4*unit,1*unit);
    ctx.fillRect(30*unit,17*unit,4*unit,1*unit);



  




}