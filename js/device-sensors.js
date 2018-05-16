function vibrate(){
    navigator.vibrate([500, 250, 500]);
}

function startNotification(){
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
          alert("This browser does not support system notifications");
        }
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification
          var notification = new Notification("Hi there!");
        }
        // Otherwise, we need to ask the user for permission
        else {
          Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              var notification = new Notification("Hi there!");
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