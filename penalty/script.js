// Function đọc file và lưu vào biến

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

  document.querySelector(".next-button").addEventListener("click", function () {
    let lenghtQuestion = 0;
    setTimeout(function () {
      if (localStorage.getItem("type") === "cauhoitritue") {
        lenghtQuestion = localStorage.getItem("lengthQuestionIntell");
      } else {
        lenghtQuestion = localStorage.getItem("lengthQuestionTrivia");
      }
      const prevIndex = parseInt(localStorage.getItem("currentQuestionIndex"));
      localStorage.setItem("currentQuestionIndex", prevIndex + 1);
      localStorage.setItem("currentQuestionIndexTemp", prevIndex + 1);
      localStorage.setItem("timeLeft", 15);

      if (
        parseInt(localStorage.getItem("currentQuestionIndex")) < lenghtQuestion
      ) {
        window.location.href = "../../questionscreen.html";
      } else {
        alert("Đã hết câu hỏi!");
        window.location.href = "../../index.html";
      }
    }, 600); // Adjust the delay to match the length of your animation

    playClickSound();
  });
});
// Function to get a random line from the text file
function getPenalty() {
  document.getElementById("penaltyMessage").innerText =
    localStorage.getItem("penalty"); // Display it in the <p>
}

function init() {
  document.getElementById("boomSound").play(); // disable
  getPenalty();
  nextButton.classList.add("next-button-hide");
}
const homeBtn = document.getElementById("img_team");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
window.onload = init;
