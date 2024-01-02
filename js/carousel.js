const left = document.querySelector(".carousel_button_left");
const right = document.querySelector(".carousel_button_right");
const dot = document.querySelectorAll(".dot");
const movieName = document.querySelectorAll(".n");
const imgs = document.querySelector(".carousel_imgs");
const carousel = document.querySelector(".carousel");
const play = document.querySelector(".play_button");
const close = document.querySelector(".close_button");

let index = 0;
position()
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
    if (index >= (dot.length - 1)) {
        imgs.style.transition = "0s";
        imgs.style.left = 0 + "%";
        index = 0
        setTimeout(() => {
            imgs.style.transition = "";
            index++
            imgs.style.left = -100 + "%";
            refreshDot()
            refreshName()
        },40)
    } else {
        index++
        imgs.style.transition = "";
        position();
    }
}

function desc() {
    if (index === 0) {
        imgs.style.transition = "0s";
        imgs.style.left = ((dot.length - 1) * -100) + "%";
        index = (dot.length - 1)
        setTimeout(() => {
            imgs.style.transition = "";
            index--
            imgs.style.left = ((dot.length - 2) * -100) + "%";
            refreshDot()
            refreshName()
        },40)
    } else {
        index--
        imgs.style.transition = "";
        position();
    }
}
//图片自动播放
function timer() {
    time = setInterval(() => {
        add();
        // position();
    }, 3000)
}
//点击左键
left.addEventListener("click", () => {
    desc();
})
//点击右键
right.addEventListener("click", () => {
    add();
    // position();
})
//更新圆点按钮
function refreshDot() {
    dot[(dot.length - 1)].style.display = 'none';
    for (let j = 0; j < dot.length; j++) {
        dot[j].style.backgroundColor = ''
    }
    dot[index].style.backgroundColor = "#fff";
    if (index === dot.length - 1) {
        dot[0].style.backgroundColor = "#fff";
    }
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
var movie6 = document.querySelector('.movie6');
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
    } else if (index === 5) {
        movie6.style.display = 'block';
        movie6.src += "&autoplay=1";
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
    movie6.style.display = 'none';
    movie6.src = movie5.src.replace("&autoplay=1", "");
});
