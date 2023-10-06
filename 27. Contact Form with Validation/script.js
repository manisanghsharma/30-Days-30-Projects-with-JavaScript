const nameVal = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const msgError = document.querySelector("#msg-error");
const fixError = document.querySelector("#fix");
const submitBtn = document.getElementById("#submitBtn");

// nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #5fae42;"></i>';
function validateName(){
    if(nameVal.value.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    else if(!nameVal.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    else{
        nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #5fae42;"></i>';
        return true;
    }
}

function validatePhone(){
    if(phone.value.length !== 10){
        phoneError.innerHTML = 'Phone no should be of 10 digits';
        return false;
    }

    else if(!phone.value.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    else{
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #5fae42;"></i>';
        return true;
    }
}

function validateEmail(){
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }

    else{
        emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #5fae42;"></i>';
        return true;
    }
}

function validateMsg(){
    let minChar = 30;
    if(msg.value.length < 31){
        msgError.innerHTML = (minChar-msg.value.length) + " more characters required";
        return false;
    }

    else{
        msgError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #5fae42;"></i>';
        return true;    
    }
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        fix.style.display = "block";
        fix.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            fix.style.display = "none";
        }, 3000);
        return false;
    }
}
