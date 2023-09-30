const scriptURL = 'https://script.google.com/macros/s/AKfycbygGmL4WS8k5wL5Qc7qlu6M4ayJ-vjkxRG3NsresXW2jiH-FKu6_iPxa8PgbT1yrV6q6g/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const thanks = document.getElementById("thanks");
const button = document.getElementById("submit");
const email  = document.getElementById("input-box");

function thanksMsg(){
    thanks.style.display = "block";
    setTimeout(() => {
        thanks.style.display = "none";
        email.value = "";
    }, 5000);
}

button.addEventListener("click", () => {
    thanksMsg();
})