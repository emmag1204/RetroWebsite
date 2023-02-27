// JavaScript
// Emma Alfaro A01740229
function reproductor(id){
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "audio/mario.mp3")
    etiquetaAudio.play()
    if (id == "pac-man"){
        setTimeout( function() { window.location.href = "pacman.html"; }, 1000 );
    }
    if (id == "donkey-kong"){
        setTimeout( function() { window.location.href = "donkey.html"; }, 1000 );
    }
    if (id == "infinite-mariobros"){
        setTimeout( function() { window.location.href = "infinite_mario.html"; }, 1000 );
    }
    if (id == "sonic"){
        setTimeout( function() { window.location.href = "sonic.html"; }, 1000 );
    }
    if (id == "super-mariokart"){
        setTimeout( function() { window.location.href = "mario_kart.html"; }, 1000 );
    }
    if (id == "tetris"){
        setTimeout( function() { window.location.href = "tetris.html"; }, 1000 );
    }
    if (id == "home"){
        setTimeout( function() { window.location.href = "index.html"; }, 1000 );
    }
}

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("reload").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "mensaje.txt");
    xhttp.send();
}