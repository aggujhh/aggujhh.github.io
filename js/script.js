// 检测元素是否进入视口的方法
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 当元素进入视口时，添加 'animate' 类
            entry.target.classList.add('animate');
        } else {
            // 当元素离开视口时，移除 'animate' 类
            entry.target.classList.remove('animate');
        }
    });
}, { threshold: 0 }); // 阈值设置为0，意味着一旦元素进入视口即触发

// 选择需要观察的元素
const elementToObserve1 = document.querySelector('.character_title');
const elementToObserve2 = document.querySelector('.staff_title');
const elementToObserve3 = document.querySelector('.movie_title');
const elementToObserve4 = document.querySelector('.movie_title_text');
const elementToObserve5 = document.querySelector('.music_title');
const elementToObserve6 = document.querySelector('.illustration_title');
const elementToObserve7 = document.querySelector('.performance_title');
const elementToObserve8 = document.querySelector('.thoughts_title');


// 开始观察元素
observer1.observe(elementToObserve1);
observer1.observe(elementToObserve2);
observer1.observe(elementToObserve3);
observer1.observe(elementToObserve4);
observer1.observe(elementToObserve5);
observer1.observe(elementToObserve6);
observer1.observe(elementToObserve7);
observer1.observe(elementToObserve8);

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

function toggleMute() {
    var video = document.getElementById("myVideo");
    video.muted = !video.muted;

    // 更新按钮状态
    var button = document.querySelector('.custom-mute-button');
    button.classList.toggle('active');
}
// H1标题
// 元素的文本内容分割成单独的字符
$(document).ready(function () {
    $(".title").lettering();
});

$(document).ready(function () {
    animation();
}, 1000);

$('.join').click(function () {
    animation();
});

function animation() {
    var title1 = new TimelineMax();
    title1.to(".join", 0, { visibility: 'hidden', opacity: 0 })
    title1.staggerFromTo(".title span", 0.5,
        { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
        { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
    title1.to(".join", 0.2, { visibility: 'visible', opacity: 1 })
}



let bg = document.querySelector(".background");
let people = document.querySelector(".people");
let platform = document.querySelector(".platform")
let intro = document.querySelector(".intro")

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    people.style.left = -(value - 300) * 0.3 + 'px';
    people.style.top = -(value - 630) * 0.5 + 'px';
    platform.style.top = -(value - 600) * 0.5 + 'px';
    intro.style.top = (value - 530) * 1.5 + 'px';
})

let left_curtain = document.querySelector(".left_curtain");
let right_curtain = document.querySelector(".right_curtain");
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    left_curtain.style.left = -(value - 1100) * 0.9 + 'px';
    right_curtain.style.right = -(value - 1100) * 0.9 + 'px';
})
let isAnimating = false;
const bochi = document.querySelector('.bochi');
const pink = document.querySelector('.pink');
const character = document.querySelector('.character');
bochi.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    pink.classList.remove('hidden');
    setTimeout(() => {
        isAnimating = false;
        pink.style.display = 'block';
    });
})
pink.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    pink.classList.add('hidden');
    setTimeout(() => {
        isAnimating = false;
        pink.style.display = 'none';
    }, 500); // 确保这里的延时与CSS中的过渡时间一致
})

const liang = document.querySelector('.liang');
const blue = document.querySelector('.blue');
liang.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    blue.classList.remove('hidden');
    setTimeout(() => {
        isAnimating = false;
        blue.style.display = 'block';
    });
})
blue.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    blue.classList.add('hidden');
    setTimeout(() => {
        isAnimating = false;
        blue.style.display = 'none';
    }, 500); // 确保这里的延时与CSS中的过渡时间一致
})

const hongxia = document.querySelector('.hongxia');
const yellow = document.querySelector('.yellow');
hongxia.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    yellow.classList.remove('hidden');
    setTimeout(() => {
        isAnimating = false;
        yellow.style.display = 'block';
    });
})
yellow.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    yellow.classList.add('hidden');
    setTimeout(() => {
        isAnimating = false;
        yellow.style.display = 'none';
    }, 500); // 确保这里的延时与CSS中的过渡时间一致
})

const kita = document.querySelector('.kita');
const red = document.querySelector('.red');
kita.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    red.classList.remove('hidden');
    setTimeout(() => {
        isAnimating = false;
        red.style.display = 'block';
    });
})
red.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    character.classList.toggle('active');
    red.classList.add('hidden');
    setTimeout(() => {
        isAnimating = false;
        red.style.display = 'none';
    }, 500); // 确保这里的延时与CSS中的过渡时间一致
})
//播放声音
function audioPlay1() {
    var audio = document.querySelector(".myAudio1");
    if (audio.paused) {
        audio.play();
    }
    event.stopPropagation();
}
function audioPlay2() {
    var audio = document.querySelector(".myAudio2");
    if (audio.paused) {
        audio.play();
    }
    event.stopPropagation();
}
function audioPlay3() {
    var audio = document.querySelector(".myAudio3");
    if (audio.paused) {
        audio.play();
    }
    event.stopPropagation();
}
function audioPlay4() {
    var audio = document.querySelector(".myAudio4");
    if (audio.paused) {
        audio.play();
    }
    event.stopPropagation();
}


$(document).ready(function () {
    function startEndCreditsAnimation() {
        $(".end-credits")
            .velocity({ translateY: "-450%" }, {
                duration: 10000,
                easing: "linear",
            })
            .velocity({ opacity: 0 }, {
                complete: function () {
                    // 动画完成后执行的操作
                    $('.cast_staff').css('opacity', '1'); // 或其他使其可见的操作
                }
            });
    }
    // 创建一个IntersectionObserver
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当触发器元素进入视口时，启动动画
                setTimeout(startEndCreditsAnimation, 31000);
                // (可选) 取消观察，如果只想动画执行一次
                observer3.unobserve(entry.target);
            }
        });
    }, { threshold: 0 }); // 可以调整阈值以更早或更晚触发动画

    // 选择触发器元素并开始观察
    const triggerElement = document.querySelector('.end-credits');
    observer3.observe(triggerElement);
});
// 定义一个IntersectionObserver来检测元素是否进入视口
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0 });

// 选择所有需要观察的元素
const elementsToObserve = document.querySelectorAll('#fly-in div');

// 使用Observer来观察每个元素
elementsToObserve.forEach(element => {
    observer2.observe(element);
});