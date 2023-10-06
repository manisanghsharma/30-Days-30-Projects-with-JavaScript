const searchbox = document.getElementById("searchbox");
const loadmore = document.getElementById("loadmore");
const searchBtn = document.getElementById("search");
const images = document.querySelector(".images");
const searchText = document.querySelector("#keyword");

let keyword = "";
let page = 1;
let accesskey = "Q2SPL5nQS3gVUHISzcjp3y-zYI-TcmdrzONVLZm0eXE";

async function searchImages(){
    keyword = searchText.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${keyword}&client_id=${accesskey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if(page==1){
        images.innerHTML = "";
    }
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.loading = "lazy";
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_blank";
        imageLink.appendChild(image);
        images.appendChild(imageLink);


        loadmore.style.visibility = "visible";
    });
}

searchBtn.addEventListener("click", () => {
    images.innerHTML = "";
    searchImages();
})

function loadPics(){
    page = page + 1;
    searchImages();
}

loadmore.addEventListener("click", () => {
    loadPics();
})