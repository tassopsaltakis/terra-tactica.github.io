// Hero Section Background Animation - Pixelated Stars
window.addEventListener('load', () => {
    const canvas = document.getElementById('heroCanvas');
    const context = canvas.getContext('2d');

    // Resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star variables
    let stars = [];
    let numStars = 150;

    // Create stars
    function createStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speed: Math.random() * 0.5 + 0.2
            });
        }
    }

    // Draw stars
    function drawStars() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#ffffff';

        for (let i = 0; i < stars.length; i++) {
            let star = stars[i];
            context.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
        }
    }

    // Update star positions
    function updateStars() {
        for (let i = 0; i < stars.length; i++) {
            let star = stars[i];
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
            }
        }
    }

    // Animation loop
    function animate() {
        updateStars();
        drawStars();
        requestAnimationFrame(animate);
    }

    // Initialize
    createStars();
    animate();

    // Resize event
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
    });
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
});
