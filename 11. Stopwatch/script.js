let time = document.getElementById("displayTime");
let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function updateTime(){
    seconds++;

    if(seconds>59){
        seconds=0;
        minutes++;
    }

    if(minutes>59){
        minutes=0;
        hours++;
    }

    let h = hours < 10? "0"+hours:hours;
    let m = minutes < 10? "0"+minutes:minutes;
    let s = seconds < 10? "0"+seconds:seconds;

    time.innerHTML = h +":"+ m+ ":"+ s;
}

function startTime(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer = setInterval(updateTime,1000);
}

function watchStop(){
    clearInterval(timer);
}

function resetTime(){
    [seconds, minutes, hours] = [0,0,0];
    time.innerHTML = "00:00:00";
    clearInterval(timer);
}

