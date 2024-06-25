// JavaScript code for nature page interactions

document.addEventListener('DOMContentLoaded', function() {
    const panoramaImg = document.getElementById('panoramaImg');
    const viewPanoramaBtn = document.getElementById('viewPanoramaBtn');

    // Simulated panoramic image link (replace with actual if available)
    const panoramaImageSrc = 'images/panorama.jpg';

    viewPanoramaBtn.addEventListener('click', function() {
        // Load panoramic image when button is clicked
        panoramaImg.src = panoramaImageSrc;
        viewPanoramaBtn.style.display = 'none'; // Hide button after loading
    });

    // Simulated video autoplay (replace with actual video API)
    const videoIframe = document.getElementById('natureVideo');
    videoIframe.src += "?autoplay=1"; // Append autoplay parameter
});

