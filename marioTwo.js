var canvas;
var ctx;
var unit = 40;
window.onload = init; // When the window loads, run the init function
function secondMario(){
    ctx.fillStyle = "rgb(144,0,0)"; //dark red
    ctx.fillRect(6*unit,0*unit,5*unit,unit);
    ctx.fillRect(4*unit,1*unit,8*unit,unit);
    ctx.fillRect(3*unit,2*unit,9*unit,unit);
    ctx.fillRect(2*unit,3*unit,11*unit,unit);
    ctx.fillRect(1*unit,4*unit,13*unit,unit);
    ctx.fillRect(1*unit,5*unit,10*unit,unit);
    ctx.fillRect(0*unit,6*unit,13*unit,unit);
    ctx.fillRect(0*unit,7*unit,14*unit,unit);
    ctx.fillRect(0*unit,8*unit,14*unit,unit);
    ctx.fillRect(3*unit,11*unit,7*unit,unit);
    ctx.fillRect(2*unit,12*unit,9*unit,unit);
    ctx.fillRect(2*unit,13*unit,10*unit,unit);
    ctx.fillStyle = "rgb(255,0,0)"; //red
    ctx.fillRect(6*unit,1*unit,5*unit,unit);
    ctx.fillRect(4*unit,2*unit,2*unit,unit);
    ctx.fillRect(4*unit,3*unit,1*unit,unit);
    ctx.fillRect(5*unit,12*unit,1*unit,unit);
    ctx.fillStyle = "rgb(212,0,0)"; // btight red
    ctx.fillRect(6*unit,2*unit,2*unit,unit);
    ctx.fillRect(5*unit,3*unit,2*unit,unit);
    ctx.fillRect(3*unit,3*unit,1*unit,unit);
    ctx.fillRect(2*unit,4*unit,3*unit,unit);
    ctx.fillRect(4*unit,11*unit,1*unit,unit);
    ctx.fillRect(3*unit,12*unit,2*unit,unit);
    ctx.fillStyle = "rgb(0,0,0)"; //black
    ctx.fillRect(7*unit,3*unit,6*unit,unit);
    ctx.fillRect(5*unit,4*unit,9*unit,unit);
    ctx.fillRect(3*unit,5*unit,3*unit,unit);
    ctx.fillRect(7*unit,5*unit,unit,2*unit);
    ctx.fillRect(9*unit,5*unit,unit,2*unit);
    ctx.fillRect(4*unit,5*unit,unit,4*unit);
    ctx.fillRect(4*unit,7*unit,2*unit,unit);
    ctx.fillRect(1*unit,8*unit,unit,unit);
    ctx.fillRect(7*unit,8*unit,unit,unit);
    ctx.fillRect(1*unit,9*unit,2*unit,unit);
    ctx.fillRect(6*unit,9*unit,7*unit,unit);
    ctx.fillRect(2*unit,10*unit,unit,unit);
    ctx.fillRect(8*unit,10*unit,4*unit,unit);
    ctx.fillRect(9*unit,17*unit,unit,unit);
    ctx.fillRect(7*unit,17*unit,unit,unit);
    ctx.fillRect(8*unit,18*unit,unit,unit);
    ctx.fillRect(10*unit,18*unit,unit,unit);
    ctx.fillRect(3*unit,18*unit,unit,unit);
    ctx.fillRect(3*unit,19*unit,8*unit,unit);
    ctx.fillStyle = "rgb(146,59,0)"; //brown
    ctx.fillRect(11*unit,6*unit,2*unit,unit);
    ctx.fillRect(13*unit,7*unit,unit,2*unit);
    ctx.fillRect(2*unit,6*unit,unit,2*unit);
    ctx.fillRect(3*unit,10*unit,2*unit,unit);
    ctx.fillRect(5*unit,11*unit,4*unit,unit);
    ctx.fillRect(3*unit,13*unit,3*unit,unit);
    ctx.fillRect(2*unit,14*unit,unit,3*unit);
    ctx.fillRect(6*unit,14*unit,unit,unit);
    ctx.fillRect(5*unit,15*unit,unit,2*unit);
    ctx.fillRect(3*unit,17*unit,4*unit,unit);
    ctx.fillRect(8*unit,17*unit,unit,unit);
    ctx.fillRect(4*unit,18*unit,3*unit,unit);
    ctx.fillStyle = "rgb(225,162,113)"; //peach
    ctx.fillRect(2*unit,5*unit,unit,unit);
    ctx.fillRect(1*unit,6*unit,unit,unit);
    ctx.fillRect(3*unit,6*unit,unit,3*unit);
    ctx.fillRect(6*unit,7*unit,7*unit,unit);
    ctx.fillRect(5*unit,8*unit,2*unit,unit);
    ctx.fillRect(6*unit,6*unit,unit,unit);
    ctx.fillRect(8*unit,6*unit,unit,unit);
    ctx.fillRect(10*unit,6*unit,unit,unit);
    ctx.fillRect(5*unit,9*unit,unit,unit);
    ctx.fillStyle = "rgb(255,103,72)"; //another skin colour
    ctx.fillRect(5*unit,6*unit,unit,unit);
    ctx.fillRect(6*unit,5*unit,unit,unit);
    ctx.fillRect(8*unit,5*unit,unit,unit);  
    ctx.fillRect(10*unit,5*unit,unit,unit); 
    ctx.fillRect(1*unit,7*unit,unit,unit);   
    ctx.fillRect(2*unit,8*unit,unit,unit);  
    ctx.fillRect(3*unit,9*unit,2*unit,unit);    
    ctx.fillRect(5*unit,10*unit,3*unit,unit);
    ctx.fillRect(8*unit,8*unit,5*unit,unit);
    ctx.fillStyle = "rgb(249,251,50)"; //yellow
    ctx.fillRect(9*unit,1*unit,unit,unit);
    ctx.fillRect(8*unit,2*unit,2*unit,unit);
    ctx.fillRect(7*unit,18*unit,unit,unit);
    ctx.fillRect(9*unit,18*unit,unit,unit);
    ctx.fillStyle = "rgb(255,255,255)"; //white
    ctx.fillRect(10*unit,2*unit,unit,unit);
    ctx.fillRect(10*unit,13*unit,unit,unit);
    ctx.fillRect(7*unit,13*unit,2*unit,unit);
    ctx.fillStyle = "rgb(89,0,255)"; //blue
    ctx.fillRect(9*unit,11*unit,unit,unit);
    ctx.fillRect(10*unit,12*unit,unit,unit);
    ctx.fillRect(11*unit,13*unit,unit,3*unit);
    ctx.fillRect(10*unit,16*unit,unit,unit);
    ctx.fillRect(8*unit,16*unit,unit,unit);
    ctx.fillStyle = "rgb(106,255,244)"; //light blue
    ctx.fillRect(8*unit,12*unit,2*unit,unit);
    ctx.fillRect(9*unit,12*unit,unit,4*unit);
    ctx.fillRect(9*unit,15*unit,2*unit,unit);
    ctx.fillStyle = "rgb(0,110,136)"; //dark blue
    ctx.fillRect(6*unit,12*unit,2*unit,unit);
    ctx.fillRect(6*unit,13*unit,unit,unit);
    ctx.fillRect(6*unit,15*unit,3*unit,unit);
    ctx.fillRect(6*unit,16*unit,2*unit,unit);
    ctx.fillRect(9*unit,16*unit,unit,unit);
}


function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.save();
    secondMario();
    ctx.scale(2,2);
    ctx.translate()
    ctx.restore();
}
