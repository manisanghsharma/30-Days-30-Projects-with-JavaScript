const btns = document.getElementsByClassName("btn");
const img = document.getElementById("img");
const buy = document.getElementById("buy");

function changePic(num){
    let imgLoc = "images/image" + num + ".png";
    img.src = imgLoc;
    for(bt of btns){
        bt.classList.remove("active");
    }

    btns[num-1].classList.add("active");
}

buy.addEventListener("click", () => {
    window.open("https://github.com/manisanghsharma");
})