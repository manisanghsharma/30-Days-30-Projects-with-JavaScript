const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("generate");
const apiURL = "https://api.quotable.io/random?tags=famous-quotes";

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiURL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- By " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

