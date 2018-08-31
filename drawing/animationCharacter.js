var canvas;
var ctx;
var unit = 10;
window.onload = init; // When the window loads, run the init function
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.save();
    ctx.translate(0 * unit, 0 * unit);
    drawMario1();
    ctx.restore();
    ctx.save();
    ctx.translate(15 * unit, 0 * unit);
    drawMario2();
    ctx.restore();
    ctx.save();
    ctx.translate(30 * unit, 0 * unit);
    drawMario3();
    ctx.restore();
}
