function drawBackground() {
    drawSkyAndGrass();
    ctx.save();
    ctx.scale(4, 4);
    ctx.translate(10 * unit, 0);
    drawMountain();
    ctx.restore();
}

function drawMountain() {
    ctx.fillStyle = "rgb(158,168,219)";
    ctx.fillRect(23 * unit, 6 * unit, 13 * unit, 1 * unit);
    ctx.fillRect(22 * unit, 7 * unit, 15 * unit, 1 * unit);
    ctx.fillRect(21 * unit, 8 * unit, 17 * unit, 1 * unit);
    ctx.fillRect(20 * unit, 9 * unit, 19 * unit, 1 * unit);
    ctx.fillRect(19 * unit, 10 * unit, 21 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 11 * unit, 23 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 12 * unit, 25 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 13 * unit, 27 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 14 * unit, 29 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 15 * unit, 31 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 16 * unit, 33 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 17 * unit, 35 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 18 * unit, 37 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 19 * unit, 39 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 20 * unit, 41 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 21 * unit, 43 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 22 * unit, 45 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 23 * unit, 47 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 24 * unit, 49 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 25 * unit, 51 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 26 * unit, 53 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 27 * unit, 55 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 28 * unit, 57 * unit, 1 * unit);
    ctx.fillRect(0 * unit, 29 * unit, 59 * unit, 1 * unit);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(29 * unit, 0 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(28 * unit, 1 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(27 * unit, 2 * unit, 5 * unit, 1 * unit);
    ctx.fillRect(26 * unit, 3 * unit, 7 * unit, 2 * unit);
    ctx.fillRect(25 * unit, 4 * unit, 9 * unit, 1 * unit);
    ctx.fillRect(24 * unit, 5 * unit, 11 * unit, 1 * unit);

}

function drawSkyAndGrass() {
    ctx.fillStyle = "rgb(51,153,255)";
    ctx.fillRect(0, 0, 1000 * unit, 500 * unit);
    ctx.fillStyle = "rgb(124,252,0)";
    ctx.fillRect(0, 120 * unit, 1000 * unit, 300 * unit);
}