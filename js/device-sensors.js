function vibrate(){
    //Fancy Vibration
    navigator.vibrate([500, 250, 500]);
}

function startNotification(){
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hello RIA !");
  }
  else {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hello RIA !");
      }
    });
  }
}

$(document).ready(() => {
    $("#vibrate").click(vibrate);
    $("#notify").click(startNotification);

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
          if (event.gamma !== null){
            $("#orientation").text("Gamma: "+event.gamma + " Beta:" + event.beta + "Alpha: " + event.alpha);
          } else {
            $("#orientation").text("Orientation: Not supported");   
          }
          
        });

      } else {
          console.log("no orientation")
      }
})