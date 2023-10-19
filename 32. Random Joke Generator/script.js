const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const generateBtn = document.getElementById("generate");

const apiUrl = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    setup.innerHTML =
      data.setup.indexOf("?") === -1 ? data.setup : "Q. " + data.setup;
    punchline.innerHTML = data.punchline;
  } catch (error) {
    alert("Something is wrong with the server :(");
  }
}

getJoke();

generateBtn.addEventListener("click", () => {
  getJoke();
});
