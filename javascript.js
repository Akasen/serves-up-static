var timeouts = {};

function countdown(element, minutes, seconds){
    var el = document.getElementById(element);
    var start = ( (minutes * 60) + seconds  );

    function instance()
    {
        var instanceTime = start--;
        
        if(instanceTime <= 0){
            el.innerHTML = "MATCH OVER!"
            return;
        }
        else{
            if(instanceTime >= 60)
            {
                el.innerHTML = Math.floor(instanceTime / 60) +":"+ (instanceTime - ((Math.floor(instanceTime / 60)) *60));

            }

            else
            {
                el.innerHTML ="00:" + Math.floor(instanceTime);
            }
            
        }
        
        
        timeouts[element.id] = window.setTimeout(function() { instance(); }, 1000);
    }
    timeouts[element.id] = window.setTimeout(function() { instance(); }, 1000);

}

//Start as many timers as you want

var start1 = document.getElementById('start1');
var start2 = document.getElementById('start2');
var start3 = document.getElementById('start3');
var start4 = document.getElementById('start4');

var isRunning = [false, false, false, false];

start1.onclick = function() {

    if (isRunning[0] == true){
        return false;
    }
    isRunning[0] = true;
    countdown('timer1', 1, 21);
    
    return false;
}

start2.onclick = function() {

    if (isRunning[1] == true){
        return false;
    }
    isRunning[1] = true;
    countdown('timer2', 0, 10);

    return false;
}

start3.onclick = function() {
    if (isRunning[2] == true){
        return false;
    }
    isRunning[2] = true;
    countdown('timer3', 0, 15);

    return false;
}

start4.onclick = function() {
    if (isRunning[3] == true){
        return false;
    }
    isRunning[3] = true;
    countdown('timer4', 0, 10);

    return false;
}
