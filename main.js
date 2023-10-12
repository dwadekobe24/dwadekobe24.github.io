// JavaScript code for your web page
document.addEventListener('DOMContentLoaded', function () {
    const animatedBox = document.getElementById('animated-box');
    
    // Add click event to the animated box
    animatedBox.addEventListener('click', function () {
        // Change the box's background color on click
        animatedBox.style.backgroundColor = getRandomColor();
    });

    // Generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
