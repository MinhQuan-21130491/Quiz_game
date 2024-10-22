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



document.addEventListener('DOMContentLoaded', function() {
  // Function to fetch the rules from data.txt and display in <ul>
  fetch('rule-data.txt')  // Path to your data file
      .then(response => response.text())
      .then(data => {
          const lines = data.split('\n');  // Split text into lines
          const ruleList = document.querySelector('.rule-box ul');  // Target the <ul>
          
          // Loop through each line and create <li> elements
          lines.forEach(rule => {
              const listItem = document.createElement('li');  // Create <li>
              listItem.textContent = rule;  // Set the rule text
              ruleList.appendChild(listItem);  // Add the <li> to the <ul>
          });
      })
      .catch(error => {
          console.error('Error fetching the rules:', error);  // Handle any errors
      });
});
