function playClickSound() {
  const clickSound = new Audio("/assets/sounds/select-gift.mp3");
  clickSound.currentTime = 0.3; // Reset the audio to the beginning
  clickSound.play(); // Play the audio
  setTimeout(function () {
    clickSound.pause(); // Pause the audio
    clickSound.currentTime = 0.3; // Reset the audio to the start
  }, 2800); // Stop
}

function animateGift(gift) {
  // Get all gifts
  const allGifts = document.querySelectorAll(".gift");

  // Disable all gifts to prevent additional clicks
  allGifts.forEach((g) => {
    g.classList.add("disabled");
    g.classList.remove("active"); // Remove any previous animations
  });

  // Add 'active' class to the clicked gift to start the animation
  gift.classList.add("active");

  // Wait for the animation to complete, then re-enable the gifts
  setTimeout(function () {
    // Enable the gifts after animation completes
    allGifts.forEach((g) => g.classList.remove("disabled"));

    // Redirect to the result page (you can adjust this as needed)
    window.location.href = "/award/result/index.html";
  }, 2800); // Adjust the delay to match your animation duration

  gift.addEventListener("click", playClickSound());
}
const homeBtn = document.getElementById("img_team");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
