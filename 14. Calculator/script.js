const display = document.getElementById("display");
let displayed = "";
function buttonClick(val){
    displayed += val;
    display.value = displayed;
}

function reset(){
    displayed = "";
    display.value = "";
}

function calc(){
    let answer = eval(display.value);
    display.value = answer;
    displayed = answer;
}

function del(){
    let afterDel = display.value.slice(0, -1);
    displayed = afterDel
    display.value = afterDel;
}

