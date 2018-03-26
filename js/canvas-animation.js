let canvas, context, requestId;

function drawRectangle(context, xposition){
    context.fillStyle = "#26A69A";
    context.fillRect(xposition , 70, 100, 50);
}

function animate( canvas, context, startTime){
    let time = (new Date()).getTime() - startTime;
    let amplitude = 150;
    let period = 2000;
    let centerX = canvas.width / 2 - 100 / 2;
    let nextX = amplitude * Math.sin(time * 2 * Math.PI / period) + centerX;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawRectangle(context, nextX);

    requestId = window.requestAnimationFrame(function(){
        animate(canvas, context, startTime);
    });
};

function stopAnimation(){
    if (requestId)
        window.cancelAnimationFrame(requestId);
    requestId = 0;
}

function initializeCanvas(){
    canvas = $("#fancy-canvas").get(0);
    context = canvas.getContext("2d");
    drawRectangle(context, 250);
    animate(canvas, context, window.performance.now());
}

$(document).ready(() => {
    $("#canvas-start").click(initializeCanvas);
    $("#canvas-stop").click(stopAnimation);
    $("#fancy-canvas").attr("width", $("#canvas-container").width());
})