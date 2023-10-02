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
    let exp = display.value;

    while(exp[0]==0){
        exp = exp.slice(1);
    }
    
    display.value = eval(exp);
    displayed = eval(exp);
}

function del(){
    let afterDel = display.value.slice(0, -1);
    displayed = afterDel
    display.value = afterDel;
}

