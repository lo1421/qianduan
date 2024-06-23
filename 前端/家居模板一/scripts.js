document.addEventListener('DOMContentLoaded', function() {
    // Image modal view
    const images = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modalImg.src = image.src;
            modal.style.display = 'block';
        });
    });

    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
