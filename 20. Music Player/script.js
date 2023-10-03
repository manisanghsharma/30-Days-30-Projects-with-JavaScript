const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const progress = document.getElementById("progress");

song.onloadedmetadata = function(){
    progress.max = song.ondurationchange;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.currentTime = progress.value;
}