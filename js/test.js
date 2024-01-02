const left = document.querySelector(".carousel_button_left");
const right = document.querySelector(".carousel_button_right");
const dot = document.querySelectorAll(".dot");
const movieName = document.querySelectorAll(".n");
const imgs = document.querySelector(".carousel_imgs");
const carousel = document.querySelector(".carousel");
const play = document.querySelector(".play_button");
const close = document.querySelector(".close_button");

let index = 0;
let time = 0;

// 初始化圆点颜色
refreshDot();
// 初始化名字
refreshName();
//结合index定义图片位置
function position() {
    imgs.style.left = (index * -100) + "%";
    refreshDot();
    refreshName();
}
function add() {
    if (index = dot.length - 2) {
        index++
        setTimeout(() => {
            imgs.style.transition = 'none';
            index=0
        },1000);
        imgs.style.transition = '';
    } else if(index != dot.length - 1){
        index++
    }
}
function desc() {
    if (index < 1) {
        index = dot.length - 1
    } else {
        index--
    }
}
//图片自动播放
function timer() {
    time = setInterval(() => {
        add();
        position();
    }, 3000)
}
//点击左键
left.addEventListener("click", () => {
    desc();
    position();
})
//点击右键
right.addEventListener("click", () => {
    add();
    position();
})
//更新圆点按钮
function refreshDot() {
    for (let j = 0; j < dot.length; j++) {
        dot[j].style.backgroundColor = '';

    }
    dot[index].style.backgroundColor = "#fff";
}
//更新名字
function refreshName() {
    for (let j = 0; j < movieName.length; j++) {
        movieName[j].style.display = '';

    }
    movieName[index].style.display = "block";
}
//圆点按钮
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
        for (let j = 0; j < dot.length; j++) {
            dot[j].style.backgroundColor = '';

        }
        dot[i].style.backgroundColor = "#fff";
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}



// 添加鼠标移入事件监听器到轮播图区域
carousel.addEventListener("mouseover", () => {
    clearInterval(time); // 暂停轮播
});
// 添加鼠标移出事件监听器到轮播图区域
carousel.addEventListener("mouseleave", () => {
    timer(); // 继续轮播
});

timer();
//播放视频
var movie1 = document.querySelector('.movie1');
var movie2 = document.querySelector('.movie2');
var movie3 = document.querySelector('.movie3');
var movie4 = document.querySelector('.movie4');
var movie5 = document.querySelector('.movie5');
function playVideo() {
    if (index === 0) {
        movie1.style.display = 'block';
        movie1.src += "&autoplay=1";
    } else if (index === 1) {
        movie2.style.display = 'block';
        movie2.src += "&autoplay=1";
    } else if (index === 2) {
        movie3.style.display = 'block';
        movie3.src += "&autoplay=1";
    } else if (index === 3) {
        movie4.style.display = 'block';
        movie4.src += "&autoplay=1";
    } else if (index === 4) {
        movie5.style.display = 'block';
        movie5.src += "&autoplay=1";
    }

}

play.addEventListener("click", () => {
    play.style.opacity = '0';
    close.style.opacity = '1';
    playVideo();
});

close.addEventListener("click", () => {
    play.style.opacity = '1';
    close.style.opacity = '0';
    movie1.style.display = 'none';
    movie1.src = movie1.src.replace("&autoplay=1", "");
    movie2.style.display = 'none';
    movie2.src = movie2.src.replace("&autoplay=1", "");
    movie3.style.display = 'none';
    movie3.src = movie3.src.replace("&autoplay=1", "");
    movie4.style.display = 'none';
    movie4.src = movie4.src.replace("&autoplay=1", "");
    movie5.style.display = 'none';
    movie5.src = movie5.src.replace("&autoplay=1", "");
});
