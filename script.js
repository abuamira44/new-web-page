// Example rotating animation
const video = document.querySelector('.video-container iframe');
let rotation = 0;

function rotateVideo() {
    rotation += 5;
    video.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(rotateVideo);
}

// Start the animation
rotateVideo();
