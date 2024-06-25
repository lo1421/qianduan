document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        
        images.forEach(image => {
            image.addEventListener('click', function() {
                images.forEach(img => img.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
});
