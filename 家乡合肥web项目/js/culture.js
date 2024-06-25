document.addEventListener('DOMContentLoaded', function() {
    const cultureImages = document.querySelectorAll('.culture-section img');

    cultureImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
