var meuVideo = document.getElementById("video1");
function play_pause() {
    if (meuVideo.paused) {
        meuVideo.play();
    } else
        meuVideo.pause();
}

function ampliar() {
    meuVideo.width += 300 ;
    meuVideo.height += 300 ;
 }

function reduzir() {
    meuVideo.width -= 300 ;
    meuVideo.height -= 300 ;
 }

function tamanho() {
    meuVideo.width = 500
    meuVideo.height = 400
 }

function telaCheia() {
    meuVideo.requestFullscreen();
}

function volumeMais() {
    meuVideo.volume += 0.1;
}

function volumeMenos() {
    meuVideo.volume -= 0.1;
}

function muted () {
    if (meuVideo.muted == false){
        meuVideo.muted = true
    }else {
        meuVideo.muted = false
    }
    
}