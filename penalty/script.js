document.addEventListener("DOMContentLoaded", function() {
    const boomElement = document.querySelector('.boom');
    const messagePanel = document.getElementById('messagePanel');
    const nextButton = document.getElementById('nextButton');

    // Trigger the explosion animation after a delay
    setTimeout(() => {
        boomElement.style.animation = 'explode 2s forwards'; // Start the explosion
    }, 1000); // Delay before explosion starts

    // Listen for the end of the explosion animation
    boomElement.addEventListener('animationend', () => {
        // Show the message panel and button with fade-in effect
        messagePanel.classList.add('show'); // Add class to trigger CSS transition
        nextButton.classList.add('show');
    });

    // Button click event
    nextButton.addEventListener('click', () => {
        
    });
});





document.querySelector('.next-button').addEventListener('click', function() {
    setTimeout(function() {
        // Redirect to another page, e.g., "reward.html"
        window.location.href = "/award/select/index.html";
    }, 600);  // Adjust the delay to match the length of your animation

});
