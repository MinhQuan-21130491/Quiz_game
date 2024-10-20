function playClickSound() {
  const clickSound = new Audio("/assets/sounds/forward-btn.mp3");
  clickSound.currentTime = 0; // Reset the audio to the beginning
  clickSound.play(); // Play the audio
  setTimeout(function () {
    clickSound.pause(); // Pause the audio
    clickSound.currentTime = 0; // Reset the audio to the start
  }, 1800); // Stop
}

document.querySelector(".next-button").addEventListener("click", function () {
  setTimeout(function () {
    const prevIndex = parseInt(localStorage.getItem("currentQuestionIndex"));
    localStorage.setItem("currentQuestionIndex", prevIndex + 1);
    window.location.href = "../../questionscreen.html";
  }, 600); // Adjust the delay to match the length of your animation

  playClickSound();
});

function getRandomLine() {
  fetch("data.txt") // Path to your text file
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n"); // Split the content into an array of lines
      const randomIndex = Math.floor(Math.random() * lines.length); // Generate a random index
      const randomLine = lines[randomIndex]; // Get a random line
      document.getElementById("random-line").innerText = randomLine; // Display it in the <p>
    })
    .catch((error) => {
      console.error("Error fetching the file:", error); // Handle any errors
    });
}
const homeBtn = document.getElementById("img_team");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

window.onload = getRandomLine;
