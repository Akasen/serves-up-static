class startButton
{
    constructor(element, minutes, seconds)
    {
        this.element = element;
        this.minutes = minutes;
        this.seconds = seconds;
        this.isRunning = false;
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
    constructor(element, minutes, seconds)
    {
        this.element = element;
        this.minutes = minutes;
        this.seconds = seconds;
        this.isRunning = false;
    }

    get TimeInSeconds()
    {
        return this.calcTimeInSeconds();
    }

    calcTimeInSeconds()
    {
        return ((parseInt(this.minutes.value) * 60) + parseInt(this.seconds.value));
    }

    reset()
    {
        this.minutes = 0;
        this.seconds = 0;

    }

    countdown()
    {

    }
}