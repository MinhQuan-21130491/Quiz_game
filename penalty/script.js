function playClickSound() {
    const clickSound = new Audio('/assets/sounds/forward-btn.mp3');
    clickSound.currentTime = 0;  // Reset the audio to the beginning
    clickSound.play();  // Play the audio
    setTimeout(function() {
        clickSound.pause();  // Pause the audio
        clickSound.currentTime = 0;  // Reset the audio to the start
    }, 1800);  // Stop
}


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
    }, 1000);  // Adjust the delay to match the length of your animation
    playClickSound();
});


// Function to get a random line from the text file
function getRandomLine() {

    fetch('data.txt')  // Path to your text file
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n'); // Split the content into an array of lines
            const randomIndex = Math.floor(Math.random() * lines.length); // Generate a random index
            const randomLine = lines[randomIndex]; // Get a random line
            document.getElementById('penaltyMessage').innerText = randomLine; // Display it in the <p>
        })
        .catch(error => {
            console.error('Error fetching the file:', error); // Handle any errors
        });
}


function init(){
    document.getElementById("boomSound").play(); // disable
    getRandomLine();
}

window.onload = init
