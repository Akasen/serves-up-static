var timeouts = {};

function countdown(element, minutes, seconds){
    var el = document.getElementById(element);
    var intMinutes, intSeconds;

    intMinutes = document.getElementById(minutes);
    intSeconds = document.getElementById(seconds);

    var start = ( (parseInt(intMinutes.value) * 60) + parseInt(intSeconds.value)  );
    var timeThen = new Date();

    function instance()
    {
        var elapsedTime = timeThen - new Date();
        console.log(elapsedTime);
        var instanceTime =  start + (Math.floor(elapsedTime/1000));
        
        if(instanceTime <= 0)
        {
            el.innerHTML = "MATCH OVER!"
            return;
        }
        else
        {
            if(instanceTime >= 60)
            {
                el.innerHTML = Math.floor(instanceTime / 60) +":"+ (instanceTime - ((Math.floor(instanceTime / 60)) *60));

            }
            else
            {
                el.innerHTML ="00:" + Math.floor(instanceTime);
            }
        }
        setTimeout(function() { instance(); }, 1000);
    }
    setTimeout(function() { instance(); }, 1000);

}


function start_onclick(index)
{
    if (isRunning[index-1] == true){
        return false;
    }
    isRunning[index-1] = true;
    countdown('timer' + index, 'minute'+ index, 'seconds' +index);

    return false; 
}

//Start as many timers as you want

var start1 = document.getElementById('start1');
var start2 = document.getElementById('start2');
var start3 = document.getElementById('start3');
var start4 = document.getElementById('start4');

var isRunning = [false, false, false, false];

start1.onclick = function(){
    start_onclick(1)
};

start2.onclick = function() {

    start_onclick(2)
}

start3.onclick = function() {
    start_onclick(3)
}

start4.onclick = function() {
    start_onclick(4)
}
