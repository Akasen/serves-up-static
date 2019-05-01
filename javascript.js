var timeouts = {};

function countdown(element, totalTime){
    var el = document.getElementById(element);

    var timeThen = new Date();

    function instance()
    {
        var elapsedTime = timeThen - new Date();
        console.log(elapsedTime);
        var instanceTime =  totalTime + (Math.floor(elapsedTime/1000));
        
        if(instanceTime <= 0)
        {
            el.innerHTML = "MATCH OVER!"
            return;
        }
        else
        {
            if(instanceTime >= 60)
            {
                el.innerHTML = Math.floor(instanceTime / 60) +":" + (instanceTime - ((Math.floor(instanceTime / 60)) *60));

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

reset()
{
    
}

var startButtonArray = [];
var resetButtonArray = [];

function start_onclick(index)
{
    if (startButtonArray[index-1].isRunning == true){
        return false;
    }
    startButtonArray[index-1].isRunning = true;
    countdown('timer' + index, startButtonArray[index-1].TimeInSeconds);

    return false; 
}

function reset_onclick(index)
{
    if (startButtonArray[index-1].isRunning == true){
        return false;
    }
    startButtonArray[index-1].isRunning = true;
    countdown('timer' + index, startButtonArray[index-1].TimeInSeconds);

    return false; 
}

//Start as many timers as you want

function initStartButton(index)
{
    startButtonArray[index-1] = new startButton(document.getElementById('start'+index), 
    document.getElementById('minute'+index),
    document.getElementById('seconds'+index));
    startButtonArray[index-1].element.onclick = function(){
        start_onclick(index);
    }
}

function initAllButtons()
{
    for(x =1; elementExists('start'+(x)); x++)
    {
        initStartButton(x);
    }
}

function elementExists(element)
{
    var test = document.getElementById(element);
 
    //If it isn't "undefined" and it isn't "null", then it exists.
    if(typeof(test) != 'undefined' && test != null){
        return true;
    } else{
        return false;
    }
}
