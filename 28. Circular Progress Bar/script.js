const number = document.getElementById("number");
const progress = document.getElementById("progress");
let root = document.documentElement;

//Change this variable between 0-100 to get the new progress animation
let progressNumber = 80; 

progressNumber = progressNumber>100 ? 100 : progressNumber;

let totalFill = 440 - 440*(progressNumber/100);
let animTime = 1.5 - 1.5*((100-progressNumber)/100);

root.style.setProperty('--total-progress', totalFill + "px");
root.style.setProperty('--anim-time', animTime + "s");

let counter = 0;
setInterval(() => {
    
    if(counter == progressNumber){
        clearInterval();
    }
    else{
        counter += 1;
        progress.innerHTML = counter;
    }
}, 15);

