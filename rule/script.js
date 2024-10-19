function playClickSound() {
    const clickSound = new Audio('/assets/sounds/forward-btn.mp3');
    clickSound.currentTime = 0;  // Reset the audio to the beginning
    clickSound.play();  // Play the audio
    setTimeout(function() {
        clickSound.pause();  // Pause the audio
        clickSound.currentTime = 0;  // Reset the audio to the start
    }, 1800);  // Stop
}


document.querySelector('.close-button').addEventListener('click', function() {
    setTimeout(function() {
        // Redirect to another page, e.g., "reward.html"
        window.location.href = "/award/select/index.html";
    }, 500);  // Adjust the delay to match the length of your animation
    playClickSound();
});



