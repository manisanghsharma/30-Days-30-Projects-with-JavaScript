let countDownDate = new Date("Oct 25, 2023 00:00:00").getTime();
let day = document.getElementById("days");
let minute = document.getElementById("minutes");
let hour = document.getElementById("hours");
let second = document.getElementById("seconds");


let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
    second.innerHTML = seconds;

    if(distance<0){
        clearInterval(x);
        day.innerHTML = "00";
        minute.innerHTML = "00";
        hour.innerHTML = "00";
        second.innerHTML = "00";
    }
}, 1000);