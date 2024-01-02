// 获取所有图片
const images = document.querySelectorAll('.illustration_img');
const clickDown = document.querySelector('.click');
const radius = 30; // 半圆的半径，根据需要调整
const centerX = 50; // 弧形中心的X坐标，百分比
const centerY = 140; // 弧形中心的Y坐标，百分比
const pi = Math.PI; // 开始角度，这里设为PI，表示半圆的底部
let rotateAngle = -40;
is_click = false;
// 设置初始位置
images.forEach((img, index, array) => {
    const totalImages = array.length;
    const theta = pi + (pi / totalImages * index); // 计算每张图片的角度

    // 计算图片的位置
    const imgLeft = centerX + Math.cos(theta) * radius; // 使用余弦函数确定X位置
    const imgTop = centerY + Math.sin(theta) * radius; // 使用正弦函数确定Y位置
    // 计算旋转角度（以度为单位）

    img.style.transform = 'translate(-50%, -50%)  rotate(' + rotateAngle + 'deg)';
    img.style.top = imgTop + '%';
    img.style.left = imgLeft + '%';
    img.style.zIndex = '1';
    rotateAngle = rotateAngle + (90 / (array.length - 1));
});

document.querySelector('.illustration').addEventListener('click', () => {
    // 移除集中的样式，图片将移动到CSS中定义的位置
    images.forEach(img => {
        img.style.transform = '';
        img.style.top = '';
        img.style.left = '';
        img.style.zIndex = '';
        clickDown.style.display = 'none';
    });
}, { once: true });

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        for (let j = 0; j < images.length; j++) {
            images[j].style.top = '';
            images[j].style.left = '';
            images[j].style.transform = '';
            images[j].style.zIndex = '';

        }

        if (is_click) {
            images[i].style.top = '';
            images[i].style.left = '';
            images[i].style.transform = '';
            images[i].style.zIndex = '';
            is_click = false;
        } else {
            images[i].style.top = '65%';
            images[i].style.left = '50%';
            images[i].style.transform = 'translate(-50%, -50%) scale(2)';
            images[i].style.zIndex = '10';
            is_click = true;
        }
    });

}



