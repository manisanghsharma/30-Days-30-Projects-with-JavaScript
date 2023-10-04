const date = document.getElementById("date");
const weekday = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function updateTime(){
    let currentTime = new Date();
    date.innerHTML = (currentTime.getDate()<10?"0":"") + currentTime.getDate();
    weekday.innerHTML = weekdays[currentTime.getDay()];
    month.innerHTML = months[currentTime.getMonth()];
    year.innerHTML = currentTime.getFullYear();
}

setInterval(() => {
    updateTime();
}, 10);