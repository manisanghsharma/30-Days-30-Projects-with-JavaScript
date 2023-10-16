const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const generateBtn = document.getElementById("generate");

const apiUrl = "https://official-joke-api.appspot.com/jokes/programming/random";

async function getJoke(){
    try{
        let response = await fetch(apiUrl);
        let data = await response.json();
        setup.innerHTML = "Q. " + data[0].setup;
        punchline.innerHTML = data[0].punchline;
    }
    catch(error){
        alert("Something is wrong with the server :(");
    }
}

getJoke();

generateBtn.addEventListener("click", () => {
    getJoke();
})