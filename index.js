var canvas;
var ctx;
var requestId;
var unit = 5;
var time = 0;
var isBlinking =false;
var speed1 = Math.random()+0.1;
var speed2 = Math.random()+0.1;
var speed3 = Math.random()+0.1;
var speed4 = Math.random()+0.1;
var transparency1 = 1;
var transparency2 = 1;
var transparency3 = 1;
var transparency4 = 1;
var positionX1 = 320;
var positionX2 = 250;
var positionX3 = 150;
var positionX4 = 40;

window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
     startAnimation();
     
}


function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawCloud(positionX1,5,transparency1);
    drawCloud(positionX2,30,transparency2);
    drawCloud(positionX3,20,transparency3);
    drawCloud(positionX4,0,transparency4);
    changeIsBlinking();
    changeTime();
    speed1 = changeSpeed(positionX1,speed1);
    speed2 = changeSpeed(positionX2,speed2);
    speed3 = changeSpeed(positionX3,speed3);
    speed4 = changeSpeed(positionX4,speed4);
    positionX1 = changePositionX(positionX1,speed1);
    positionX2 = changePositionX(positionX2,speed2);
    positionX3 = changePositionX(positionX3,speed3);
    positionX4 = changePositionX(positionX4,speed4);
    drawLlama(90,90,isBlinking);
    requestId = requestAnimationFrame(animationLoop);
    
}

function changeIsBlinking(){
    if(time<44){
        isBlinking = false;
    }else{
        isBlinking = true;
    }
}

function changeTime(){
    if(time<50){
        time+= 1;
    }else{
        time=0;
    }
}

function changePositionX(position,speed){
    if(position<= -16*unit){
        return 320;
    }else{
        return position-speed;
    }
}

function changeSpeed(position,speed){
    if(position == 320){
        return Math.random() + 0.1;
    } else {
      
        return speed;
    }
} 