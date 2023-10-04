const okay = document.getElementById("okay");
const popup = document.querySelector(".popup");
const submit = document.querySelector("#submitBtn");

okay.addEventListener("click", () => {
    popup.classList.remove("open-popup");
})

submit.addEventListener("click", () => {
    popup.classList.add("open-popup");
})