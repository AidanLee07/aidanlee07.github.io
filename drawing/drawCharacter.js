function drawCharacter(x,y){
ctx.save();
ctx.translate(x*unit,y*unit);
ctx.restore();
ctx.fillStyle = "red"
ctx.fillRect(0,0,10*unit,1*unit);

}