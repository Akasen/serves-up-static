class startButton
{
    constructor(elementIndex)
    {
        this.elementIndex = elementIndex;
        this.start = "start" + elementIndex;
        this.timer = "timer" + elementIndex;
        this.reset = "reset" + elementIndex;
        this.isRunning = false;
        initiateButtons();
    }

    get TimeInSeconds()
    {
        return this.calcTimeInSeconds();
    }

    calcTimeInSeconds()
    {
        return ((parseInt(this.minutes.value) * 60) + parseInt(this.seconds.value));
    }
}

/*
class resetButton
{
    constructor(element)
    {

    }
}*/


class timer
{
    constructor(elementIndex, minutes, seconds)
    {
        this.elementIndex = elementIndex;

        //These get changed by countdown
        this.minutes = minutes;
        this.seconds = seconds;
        
        //These are the something something
        this.initialMinute = minutes;
        this.initialSeconds = seconds;

        this.isRunningFlag = false;
        this.resetFlag = false;
    }

    get TimeInSeconds()
    {
        return this.calcTimeInSeconds();
    }

    //IF YOU HAVE PROBLEMS WITH THE NUMBERS, CHECK HERE FIRST
    calcTimeInSeconds()
    {
        return ( parseInt((document.getElementById('minute'+this.elementIndex).value) * 60) + parseInt(document.getElementById('seconds'+this.elementIndex).value) );
    }

    reset()
    {
        this.minutes = this.initialMinute;
        this.seconds = this.initialSeconds;
    }

    stop()
    {

    }

    start()
    {
        
    }

    countdown()
    {
        var el = document.getElementById('timer'+this.elementIndex);
        console.log(this.elementIndex);

        var totalTime = this.calcTimeInSeconds();

        var timeThen = new Date();

        function instance()
        {
            var elapsedTime = timeThen - new Date();
            console.log(elapsedTime);
            var instanceTime =  totalTime + (Math.floor(elapsedTime/1000));
            console.log(totalTime);
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

    initiateButtons()
    {
        document.getElementById("start"+this.elementIndex).onclick = function(){
            this.countdown();
        }
    }
}