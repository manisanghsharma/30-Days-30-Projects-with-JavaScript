let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check" style="color: #3b9b12;"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i></i>Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #ff7b24;"></i></i>Invalid input, check again';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

