const music_switch = document.querySelectorAll(".music_switch");
const img = document.querySelectorAll(".music_switch_img");
const music = document.querySelector(".myMusic");
let is_play = 0;

for (let i = 0; i < music_switch.length; i++) {
    music_switch[i].addEventListener('click', () => {
        for (let j = 0; j < img.length; j++) {
            music_switch[j].style.color ="#fff";
        }
        for (let j = 0; j < img.length; j++) {
            img[j].src = "img/voice2.png";
        }
        img[i].src = "img/noise2.png";
        if (!music.paused&&is_play===i) {
            music.pause();
            img[i].src = "img/voice2.png";
            
        } else {
            music.src = "video/music" + (i + 1) + ".aac";
            is_play = i;
            music_switch[i].style.color ="#5c7cfa";
            music.play();
        }
    })
}



