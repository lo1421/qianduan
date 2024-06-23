
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const hiddenContent = document.querySelector('.hidden-content');

    if (toggleButton && hiddenContent) {
        toggleButton.addEventListener('click', function() {
            hiddenContent.classList.toggle('active');
        });
    }
});


let currentIndex = 0;
const images = [
    'images/sun-wukong.jpg',
    'images/zhu-bajie.jpg',
    'images/sandy.jpg'
];
const imageElement = document.getElementById('slideshow-image');

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
}


let intervalId;

function startSlideshow() {
    intervalId = setInterval(nextSlide, 3000); 
}

function stopSlideshow() {
    clearInterval(intervalId);
}


startSlideshow();





