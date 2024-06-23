document.addEventListener('DOMContentLoaded', function() {
    console.log("欢迎访问首页!");

    // 示例：图片加载效果
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.onload = () => {
            img.style.opacity = 1;
        };
        img.style.opacity = 0;
    });
});
