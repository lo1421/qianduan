document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy');
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const lazyLoad = (target) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, options);

        observer.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});

// 轮播图效果
let slideIndex = 0;
const slides = document.querySelector('.slides');

const showSlides = () => {
    const slidesArray = document.querySelectorAll('.slide');
    slidesArray.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slidesArray.length) {
        slideIndex = 1;
    }
    slidesArray[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
};

showSlides();
