//Added Blob Version for making Web-Workers work -> Normally you would add that into another file
//But i was lazy and i did not want to set up a server nor mess around with CORS-Stuff
function run(fn) {
    return new Worker(URL.createObjectURL(new Blob(['('+fn+')()'])));
}

function startWorker(){
    const worker = run(() => {
        function fibonacci(n) {
            return n < 1 ? 0
                 : n <= 2 ? 1
                 : fibonacci(n - 1) + fibonacci(n - 2);
         }
        
        postMessage("Fibonacci (42) is: " + fibonacci(42));
        self.close();
    });
      
    worker.onmessage = function(event){
        M.toast({html: event.data});
    }
}

$(document).ready(() => {
    $("#web-worker").click(startWorker);
})



  
