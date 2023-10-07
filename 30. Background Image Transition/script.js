const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const original = document.getElementById("original");
const line = document.getElementById("line");

original.style.width = imgBox.offsetWidth + "px";   

let leftspace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftspace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}