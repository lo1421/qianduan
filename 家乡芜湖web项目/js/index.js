// JavaScript code for dynamic interactions
document.addEventListener('DOMContentLoaded', function() {
    // Fade in hero text on page load
    const heroText = document.querySelector('.hero-text');
    heroText.classList.add('active');

    // Implement parallax effect on cityscape image
    const cityscapeImg = document.getElementById('cityscape-img');
    document.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        cityscapeImg.style.transform = `translateY(-${scrollTop * 0.3}px)`;
    });
});
