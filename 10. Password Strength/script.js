const password = document.getElementById("password");
const box = document.querySelector(".container");
const message = document.getElementById("message");
function passStrength(){

    if(password.value.length === 0){
        box.style.border = "1px solid white";
        message.style.display = "none"; 
        
    }
    else if(password.value.length <= 6){
        box.style.border = "1px solid red";
        message.innerHTML = "Password is weak"
        message.style.color = "red";
        message.style.display = "block";
        message.style.right = "85px";

    }
    else if(password.value.length > 6 && password.value.length <= 12){
        box.style.border = "1px solid orange";
        message.innerHTML = "Password is medium";
        message.style.color = "orange";
        message.style.display = "block";
        message.style.right = "73px";

    }
    else{
        box.style.border = "1px solid green"
        message.innerHTML = "Password is strong";
        message.style.color = "green";
        message.style.display = "block";
        message.style.right = "81px";
    }
}
