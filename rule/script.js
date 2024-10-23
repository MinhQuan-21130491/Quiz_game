function playClickSound() {
  const clickSound = new Audio("/assets/sounds/forward-btn.mp3");
  clickSound.currentTime = 0; // Reset the audio to the beginning
  clickSound.play(); // Play the audio
  setTimeout(function () {
    clickSound.pause(); // Pause the audio
    clickSound.currentTime = 0; // Reset the audio to the start
  }, 1800); // Stop
}
const homeBtn = document.getElementById("img-team");
homeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
const bgSound = document.getElementById("bg-sound");
window.onload = function () {
  bgSound.play();
};
