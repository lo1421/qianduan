document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-item');

    foodItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});

