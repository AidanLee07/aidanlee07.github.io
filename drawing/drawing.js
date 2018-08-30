var canvas;
var ctx;
window.onload = init; // When the window loads, run the init function
function block1(){
   
}

function init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'blue'; // Setting the colour of filling
    ctx.fillRect(0,0,10,10); // Drawing a rectangle
    ctx.fillRect(0,0,20,10); //Drawing a rectangle
    ctx.fillRect(0,0,30,10); //Drawing a rectangle
    ctx.strokeStyle = 'blue'; 
    ctx.lineWidth = 10;
    ctx.strokeRect(100,200,15,15);
    ctx.font = "normal bold 50px monospace";
    // ctx.font = [font-style] [font-weight] [font-size] [font-family]
    ctx.fillText("Aidan",300,200);
    ctx.beginPath(); // Code that comes before drawing a line
    ctx.fillStyle = "red"
    ctx.moveTo(110,30); // Orgin of the line
    ctx.lineTo(120,80); // The destination position of the line
    ctx.lineTo(180,80);
    ctx.lineTo(150,100);
    ctx.lineTo(180,140);
    ctx.lineTo(120,120);
    ctx.lineTo(90,160);
    ctx.lineTo(90,100);
    ctx.lineTo(50,120);
    ctx.lineTo(80,90)
    ctx.lineTo(110,30)
    
    

    // ctx.fill();
   ctx.stroke(); // Stroking a line
    ctx.save();
    ctx.translate(300,300);
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,120,120);
    ctx.restore();

}