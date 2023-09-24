const passwordBox = document.getElementById("password");
const copy = document.getElementById("copyText");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "@#$%^&*()+=-~_|{}[]></";
const allChars = upperCase + lowerCase + numbers + symbol;
function createPassword(){
    let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(len > password.length){
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value);
  }

copy.addEventListener("click", function(){
    copyPassword();
})


