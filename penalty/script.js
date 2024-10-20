function playClickSound() {
  const clickSound = new Audio("/assets/sounds/forward-btn.mp3");
  clickSound.currentTime = 0; // Reset the audio to the beginning
  clickSound.play(); // Play the audio
  setTimeout(function () {
    clickSound.pause(); // Pause the audio
    clickSound.currentTime = 0; // Reset the audio to the start
  }, 1800); // Stop
}

document.addEventListener("DOMContentLoaded", function () {
  const boomElement = document.querySelector(".boom");
  const messagePanel = document.getElementById("messagePanel");
  const nextButton = document.getElementById("nextButton");

  // Trigger the explosion animation after a delay
  setTimeout(() => {
    boomElement.style.animation = "explode 2s forwards"; // Start the explosion
  }, 1000); // Delay before explosion starts

  // Listen for the end of the explosion animation
  boomElement.addEventListener("animationend", () => {
    // Show the message panel and button with fade-in effect
    messagePanel.classList.add("show"); // Add class to trigger CSS transition
    nextButton.classList.remove("next-button-hide");
  });

  // Chuyển đến câu hỏi tiếp theo
  nextButton.addEventListener("click", () => {
    const prevIndex = parseInt(localStorage.getItem("currentQuestionIndex"));
    localStorage.setItem("currentQuestionIndex", prevIndex + 1);
    window.location.href = "../questionscreen.html";
  });
});
// Function to get a random line from the text file
function getRandomLine() {
  fetch("data.txt") // Path to your text file
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split("\n"); // Split the content into an array of lines
      const randomIndex = Math.floor(Math.random() * lines.length); // Generate a random index
      const randomLine = lines[randomIndex]; // Get a random line
      document.getElementById("penaltyMessage").innerText = randomLine; // Display it in the <p>
    })
    .catch((error) => {
      console.error("Error fetching the file:", error); // Handle any errors
    });
}

function init() {
  document.getElementById("boomSound").play(); // disable
  getRandomLine();
  nextButton.classList.add("next-button-hide");
}
const homeBtn = document.getElementById("img_team");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
window.onload = init;
