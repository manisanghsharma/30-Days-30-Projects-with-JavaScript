const password = document.getElementById("input-box");
let eyeIcon = document.getElementById("eye");
password.type = "password";
eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "eye-icons/eye-open.png";
        
    }
    else{
        password.type = "password";
        eyeIcon.src = "eye-icons/eye-close.png";
    }
}