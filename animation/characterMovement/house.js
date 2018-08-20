var canvas;
var ctx;
window.onload = init; // When the window loads, run the init function
function wall(){
    ctx.fillStyle = 'grey'; // Setting the colour of filling
    ctx.fillRect(80,524,1253,286); // Drawing a rectangle
    ctx.fillRect(708,324,625,204);
    ctx.beginPath 
    ctx.fillStyle = "grey"
    ctx.moveTo(1325,250); 
    ctx.lineTo(1325,89); 
    ctx.lineTo(1246,89);
    ctx.lineTo(1246,152);
    ctx.moveTo(1325,225);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.fillRect(83,817,1253,31);
    ctx.fillRect(1245,65,80,24);
    ctx.fillStyle = 'white';
    ctx.fillRect(135,569,510,280);
    ctx.fillRect(742,564,160,290);
    ctx.fillRect(954,554,332,191);
    ctx.fillRect(741,351,160,164);
    ctx.fillRect(944,351,160,164);
    ctx.fillRect(1144,351,160,164);
    ctx.fillStyle = 'black';
    ctx.fillRect(148,579,481,273);
    ctx.fillRect(745,355,150,154);
    ctx.fillRect(950,355,150,154);
    ctx.fillRect(1149,355,150,154);
    ctx.fillRect(960,559,320,180);
    ctx.fillStyle = 'white';
    ctx.fillRect(170,605,69,51);
    ctx.fillRect(245,605,69,51);
    ctx.fillRect(318,605,69,51);
    ctx.fillRect(393,605,69,51);
    ctx.fillRect(465,605,69,51);
    ctx.fillRect(537,605,69,51);
    ctx.fillStyle = 'blue';
    ctx.fillRect(750,576,143,273);
    ctx.beginPath(); // Code that comes before drawing a line
    ctx.fillStyle = "blue"
    ctx.moveTo(703,343); 
    ctx.lineTo(703,517); 
    ctx.lineTo(50,517);
    ctx.lineTo(201,343)
    ctx.moveTo(683,343);
    ctx.fill();
    ctx.beginPath 
    ctx.fillStyle = "blue"
    ctx.moveTo(675,314); 
    ctx.lineTo(1370,314); 
    ctx.lineTo(1219,133);
    ctx.lineTo(821,133);
    ctx.moveTo(675,294);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillRect(856,691,30,30);
}



