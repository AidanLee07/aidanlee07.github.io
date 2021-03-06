function drawLlama(x, y, isBlinking) {

    ctx.save();
    ctx.translate(x * unit, y * unit);
    drawHead();
    drawEye(isBlinking);
    drawBody();
    drawLeg();
    ctx.restore();
}

function drawHead() {
    ctx.fillStyle = "rgb(156,108,219)";//light purple
    ctx.fillRect(10 * unit, 1 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 2 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 3 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(14 * unit, 4 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(15 * unit, 5 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(16 * unit, 6 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(16 * unit, 9 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 0 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(17 * unit, 1 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 2 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(19 * unit, 3 * unit, 1 * unit, 7 * unit);
    ctx.fillRect(20 * unit, 6 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(21 * unit, 8 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(10 * unit, 10 * unit, 13 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 11 * unit, 5 * unit, 1 * unit)
    ctx.fillRect(16 * unit, 11 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 12 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 12 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 13 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 13 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 14 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 14 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 15 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 15 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 15 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 16 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 16 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 17 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 18 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 19 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 20 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 21 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 16 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 17 * unit, 2 * unit, 5 * unit);
    ctx.fillRect(6 * unit, 20 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(5 * unit, 21 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(22 * unit, 16 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 17 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(20 * unit, 18 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(19 * unit, 19 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 20 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 21 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 22 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 23 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 24 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 25 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 26 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 27 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 28 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 29 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 30 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 31 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 32 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 33 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 34 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 35 * unit, 9 * unit, 1 * unit);
    ctx.fillStyle = "rgb(112,76,102)";//brown
    ctx.fillRect(6 * unit, 13 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 14 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(22 * unit, 14 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(7 * unit, 15 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 16 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 15 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(20 * unit, 16 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(19 * unit, 17 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 18 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(17 * unit, 19 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(16 * unit, 19 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(15 * unit, 21 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 17 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(10 * unit, 18 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(11 * unit, 19 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(10 * unit, 22 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 22 * unit, 6 * unit, 1 * unit);
    ctx.fillStyle = "rgb(96,61,142)";//dark purple
    ctx.fillRect(14 * unit, 0 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(15 * unit, 2 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(16 * unit, 3 * unit, 2 * unit, 3 * unit);
    ctx.fillRect(17 * unit, 4 * unit, 2 * unit, 5 * unit);
    ctx.fillRect(18 * unit, 9 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 2 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 3 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 3 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(13 * unit, 5 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(14 * unit, 6 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(14 * unit, 7 * unit, 2 * unit, 3 * unit);
    ctx.fillRect(3 * unit, 16 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 17 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 18 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 19 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 21 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 22 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 23 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 24 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 25 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 26 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 27 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 28 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 29 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 30 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 31 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 32 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 33 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 34 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 35 * unit, 10 * unit, 1 * unit);
    ctx.fillStyle = "rgb(51,51,51)";//black for others
    ctx.fillRect(2 * unit, 18 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 18 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillStyle = "rgb(141,141,141)";//grey
    ctx.fillRect(9 * unit, 20 * unit, 2 * unit, 2 * unit);
    ctx.fillStyle = "rgb(214,214,214)";//white
    ctx.fillRect(1 * unit, 20 * unit, 5 * unit, 1 * unit);


}

function drawEye(isBlinking){
    if (isBlinking == false) {
        ctx.fillStyle = "rgb(214,214,214)";//white
        ctx.fillRect(14 * unit, 11 * unit, 2 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 12 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 13 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 14 * unit, 2 * unit, 1 * unit);
        ctx.fillRect(16 * unit, 14 * unit, 1 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 15 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(14 * unit, 16 * unit, 3 * unit, 1 * unit);
        ctx.fillStyle = "rgb(0,0,0)";//black change this black
        ctx.fillRect(15 * unit, 14 * unit, 1 * unit, 1 * unit);
    } else if (isBlinking == true) {
        ctx.fillStyle = "rgb(156,108,219)";//light purple
        ctx.fillRect(14 * unit, 11 * unit, 2 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 12 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 13 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 14 * unit, 2 * unit, 1 * unit);
        ctx.fillRect(16 * unit, 14 * unit, 1 * unit, 1 * unit);
        ctx.fillRect(13 * unit, 15 * unit, 4 * unit, 1 * unit);
        ctx.fillRect(14 * unit, 16 * unit, 3 * unit, 1 * unit);
        ctx.fillStyle = "rgb(0,0,0)";//black change this black
        ctx.fillRect(13 * unit, 14 * unit, 4 * unit, 1 * unit);
    }
}


function drawBody() {
    ctx.fillStyle = "rgb(156,108,219)";//light purple
    ctx.fillRect(13 * unit, 36 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 37 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 37 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(41 * unit, 40 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(43 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(45 * unit, 41 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(44 * unit, 42 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(20 * unit, 46 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(22 * unit, 46 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(24 * unit, 47 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 48 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 48 * unit, 11 * unit, 7 * unit);
    ctx.fillRect(16 * unit, 55 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 55 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(20 * unit, 55 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 55 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(22 * unit, 55 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(24 * unit, 55 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 46 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(40 * unit, 47 * unit, 1 * unit, 9 * unit);
    ctx.fillRect(41 * unit, 43 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(48 * unit, 42 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(45 * unit, 43 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(49 * unit, 43 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(22 * unit, 64 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(20 * unit, 65 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 66 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(25 * unit, 66 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(27 * unit, 66 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(30 * unit, 66 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(31 * unit, 67 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(32 * unit, 65 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(33 * unit, 66 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(34 * unit, 67 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(37 * unit, 67 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(38 * unit, 66 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 67 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 68 * unit, 22 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 69 * unit, 20 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 70 * unit, 20 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 71 * unit, 15 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 72 * unit, 11 * unit, 1 * unit);
    ctx.fillRect(50 * unit, 45 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(49 * unit, 46 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(46 * unit, 45 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(47 * unit, 50 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(46 * unit, 52 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(41 * unit, 46 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(42 * unit, 44 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(43 * unit, 45 * unit, 1 * unit, 9 * unit);
    ctx.fillRect(16 * unit, 73 * unit, 6 * unit, 1 * unit);
    ctx.fillStyle = "rgb(96,61,142)";//dark purple
    ctx.fillRect(5 * unit, 36 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 37 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(41 * unit, 41 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(44 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(42 * unit, 42 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(45 * unit, 42 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(2 * unit, 48 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 48 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 48 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(2 * unit, 49 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 49 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 50 * unit, 13 * unit, 3 * unit);
    ctx.fillRect(2 * unit, 53 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 53 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 54 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 54 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 54 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 55 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 55 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(13 * unit, 55 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 55 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(40 * unit, 43 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 63 * unit, 2 * unit, 3 * unit);
    ctx.fillRect(4 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(8 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(14 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(15 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 66 * unit, 13 * unit, 5 * unit);
    ctx.fillRect(4 * unit, 71 * unit, 12 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 72 * unit, 8 * unit, 2 * unit);
    ctx.fillRect(42 * unit, 45 * unit, 1 * unit, 9 * unit);
    ctx.fillRect(41 * unit, 44 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(43 * unit, 43 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(44 * unit, 44 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(45 * unit, 45 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(46 * unit, 50 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(45 * unit, 52 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(47 * unit, 43 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(48 * unit, 44 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(49 * unit, 45 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(48 * unit, 46 * unit, 1 * unit, 4 * unit);
    ctx.fillStyle = "rgb(44,119,165)";// dark sky blue
    ctx.fillRect(4 * unit, 35 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 35 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 36 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 36 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(12 * unit, 36 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(4 * unit, 37 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 38 * unit, 12 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 39 * unit, 12 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 40 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 40 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 40 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 53 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 54 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 54 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 55 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 55 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 56 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 56 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 57 * unit, 12 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 58 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 58 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 59 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 59 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 59 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 59 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 60 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 60 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 60 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 61 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 61 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 61 * unit, 1 * unit, 1 * unit);
    ctx.fillStyle = "rgb(51,136,194)";// light sky blue
    ctx.fillRect(15 * unit, 36 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(16 * unit, 38 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(17 * unit, 36 * unit, 1 * unit, 6 * unit);
    ctx.fillRect(18 * unit, 38 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(19 * unit, 36 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(20 * unit, 37 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(21 * unit, 37 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(22 * unit, 39 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 37 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(38 * unit, 38 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 39 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 55 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(16 * unit, 57 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(17 * unit, 55 * unit, 1 * unit, 7 * unit);
    ctx.fillRect(18 * unit, 57 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(19 * unit, 57 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(20 * unit, 56 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(21 * unit, 57 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(22 * unit, 56 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(23 * unit, 55 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(24 * unit, 56 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(25 * unit, 55 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(39 * unit, 57 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(40 * unit, 56 * unit, 1 * unit, 2 * unit);
    ctx.fillStyle = "rgb(145,145,145)";// grey
    ctx.fillRect(22 * unit, 35 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(24 * unit, 36 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(22 * unit, 37 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(25 * unit, 37 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(22 * unit, 38 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(26 * unit, 38 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(23 * unit, 39 * unit, 5 * unit, 1 * unit);
    ctx.fillStyle = "rgb(198,198,198)";// lighter grey
    ctx.fillRect(22 * unit, 36 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(24 * unit, 37 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(23 * unit, 38 * unit, 3 * unit, 1 * unit);
    ctx.fillStyle = "rgb(146,104,144)";// magenta
    ctx.fillRect(26 * unit, 37 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(27 * unit, 38 * unit, 7 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 39 * unit, 2 * unit, 1 * unit);
    ctx.fillStyle = "rgb(6,45,150)";// dark blue
    ctx.fillRect(2 * unit, 40 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 40 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 40 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 41 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 41 * unit, 2 * unit, 1 * unit)
    ctx.fillRect(10 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 41 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 42 * unit, 13 * unit, 5 * unit);
    ctx.fillRect(2 * unit, 47 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 47 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(6 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(8 * unit, 47 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(9 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(10 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(11 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(13 * unit, 47 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(2 * unit, 59 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(3 * unit, 59 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(4 * unit, 61 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(5 * unit, 60 * unit, 1 * unit, 6 * unit);
    ctx.fillRect(6 * unit, 59 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(7 * unit, 60 * unit, 1 * unit, 6 * unit);
    ctx.fillRect(8 * unit, 58 * unit, 1 * unit, 7 * unit);
    ctx.fillRect(9 * unit, 60 * unit, 1 * unit, 6 * unit);
    ctx.fillRect(10 * unit, 59 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(11 * unit, 62 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(12 * unit, 61 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(13 * unit, 62 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(14 * unit, 60 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(15 * unit, 62 * unit, 1 * unit, 3 * unit);
    ctx.fillStyle = "rgb(10,50,180)";// light blue
    ctx.fillRect(15 * unit, 40 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(19 * unit, 40 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(22 * unit, 40 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 41 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 41 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 41 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 42 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 43 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 44 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 45 * unit, 11 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 46 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 46 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(23 * unit, 46 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 47 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 47 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(23 * unit, 47 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(38 * unit, 39 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 40 * unit, 2 * unit, 3 * unit);
    ctx.fillRect(39 * unit, 43 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 44 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(40 * unit, 46 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 60 * unit, 1 * unit, 6 * unit);
    ctx.fillRect(17 * unit, 62 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(18 * unit, 62 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(19 * unit, 61 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(20 * unit, 60 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(21 * unit, 61 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(22 * unit, 59 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(23 * unit, 60 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(24 * unit, 59 * unit, 1 * unit, 9 * unit);
    ctx.fillRect(25 * unit, 58 * unit, 1 * unit, 8 * unit);
    ctx.fillRect(26 * unit, 64 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(27 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(28 * unit, 64 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(29 * unit, 65 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(30 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(31 * unit, 65 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(37 * unit, 64 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(38 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(39 * unit, 59 * unit, 1 * unit, 5 * unit);
    ctx.fillRect(40 * unit, 58 * unit, 1 * unit, 5 * unit);
    ctx.fillStyle = "rgb(144,105,97)";// light brown
    ctx.fillRect(34 * unit, 38 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(30 * unit, 39 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(25 * unit, 40 * unit, 14 * unit, 1 * unit);
    ctx.fillRect(24 * unit, 41 * unit, 15 * unit, 1 * unit);
    ctx.fillRect(23 * unit, 42 * unit, 16 * unit, 1 * unit);
    ctx.fillRect(38 * unit, 43 * unit, 1 * unit, 21 * unit);
    ctx.fillRect(24 * unit, 43 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(25 * unit, 44 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(26 * unit, 45 * unit, 2 * unit, 19 * unit);
    ctx.fillRect(39 * unit, 47 * unit, 1 * unit, 10 * unit);
    ctx.fillRect(28 * unit, 62 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(37 * unit, 62 * unit, 1 * unit, 2 * unit);
    ctx.fillStyle = "rgb(246,236,224)";// lightest brown
    ctx.fillRect(33 * unit, 43 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(30 * unit, 44 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 45 * unit, 10 * unit, 3 * unit);
    ctx.fillRect(28 * unit, 48 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 48 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 49 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 49 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 50 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(36 * unit, 50 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 51 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(37 * unit, 51 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 52 * unit, 3 * unit, 5 * unit);
    ctx.fillRect(35 * unit, 52 * unit, 3 * unit, 5 * unit);
    ctx.fillRect(28 * unit, 57 * unit, 10 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 58 * unit, 4 * unit, 3 * unit);
    ctx.fillRect(35 * unit, 58 * unit, 3 * unit, 3 * unit);
    ctx.fillRect(28 * unit, 61 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(36 * unit, 61 * unit, 2 * unit, 1 * unit);
    ctx.fillStyle = "rgb(62,62,62)";// light black
    ctx.fillRect(32 * unit, 58 * unit, 3 * unit, 3 * unit);
    ctx.fillRect(31 * unit, 61 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 61 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(30 * unit, 62 * unit, 2 * unit, 3 * unit);
    ctx.fillRect(35 * unit, 62 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(33 * unit, 63 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(29 * unit, 64 * unit, 1 * unit, 1 *  unit);
    ctx.fillStyle = "rgb(141,141,141)";// grey
    ctx.fillRect(33 * unit, 61 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(32 * unit, 62 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(32 * unit, 62 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(35 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillStyle = "rgb(167,122,113)";// light dark brown 
    ctx.fillRect(34 * unit, 63 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(33 * unit, 64 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(34 * unit, 66 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 67 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(37 * unit, 65 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(36 * unit, 66 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(36 * unit, 64 * unit, 1 * unit, 1 * unit);
    ctx.fillStyle = "rgb(77,77,77)";// lightest black
    ctx.fillRect(34 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(36 * unit, 65 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 66 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 64 * unit, 1 * unit, 1 * unit);
    ctx.fillStyle = "rgb(104,83,78)";// brown for arrow
    ctx.fillRect(32 * unit, 48 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(31 * unit, 49 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(30 * unit, 50 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(29 * unit, 51 * unit, 8 * unit, 1 * unit)
    ctx.fillRect(31 * unit, 52 * unit, 4* unit, 5 * unit)




    

}


function drawLeg() {
    ctx.fillStyle = "rgb(8,54,146)";// dark blue
    ctx.fillRect(7 * unit, 74 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 75 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 74 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(15 * unit, 76 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(27 * unit, 72 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(31 * unit, 71 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(31 * unit, 73 * unit, 3 * unit, 1 * unit);
    ctx.fillStyle = "rgb(8,66,179)";// blue
    ctx.fillRect(6 * unit, 75 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 76 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 77 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 78 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 79 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 76 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 77 * unit, 4 * unit, 3 * unit);
    ctx.fillRect(14 * unit, 80 * unit, 5 * unit, 3 * unit);
    ctx.fillRect(14 * unit, 83 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(26 * unit, 73 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(27 * unit, 75 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 73 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(32 * unit, 74 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(33 * unit, 76 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(33 * unit, 77 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 78 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(34 * unit, 79 * unit, 2 * unit, 1 * unit);
    ctx.fillStyle = "rgb(55,32,63)";// purplish
    ctx.fillRect(3 * unit, 78 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(4 * unit, 79 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(5 * unit, 80 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(6 * unit, 80 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 85 * unit, 4 * unit, 2 * unit);
    ctx.fillRect(14 * unit, 87 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(27 * unit, 76 * unit, 3 * unit, 2 * unit);
    ctx.fillRect(36 * unit, 79 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 80 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(35 * unit, 81 * unit, 3 * unit, 1 * unit);
}