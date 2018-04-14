function startAnimation(){
    resetAnimation();
    $("#svg-animation-1").attr("fill", "freeze");
    $("#svg-animation-2").attr("fill", "freeze");
    $("#svg-animation-3").attr("fill", "freeze");
    document.getElementById("svg-animation-1").beginElement();
    setTimeout(() => {document.getElementById("svg-animation-2").beginElement()}, 500);
    setTimeout(() => {document.getElementById("svg-animation-3").beginElement()}, 1500);
}

function resetAnimation(){
    $("#svg-animation-1").attr("fill", "");
    $("#svg-animation-2").attr("fill", "");
    $("#svg-animation-3").attr("fill", "");
}

$(document).ready(() => {
    $("#svg-start").click(startAnimation);
})