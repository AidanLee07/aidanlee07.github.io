function drawCloud(x,y,transparency){
    ctx.save();
    ctx.translate(x * unit,y * unit);
    ctx.scale(3,3);
    cloud(transparency);
    ctx.restore();
}

function cloud(transparency){
    ctx.fillStyle = `rgba(255,255,255,${transparency})`;
    ctx.fillRect(3*unit,0*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,1*unit,11*unit,1*unit);
    ctx.fillRect(1*unit,2*unit,13*unit,1*unit);
    ctx.fillRect(0*unit,3*unit,15*unit,1*unit);
    ctx.fillRect(0*unit,4*unit,16*unit,1*unit);
    ctx.fillRect(1*unit,5*unit,15*unit,1*unit);
    ctx.fillRect(2*unit,6*unit,12*unit,1*unit);
}