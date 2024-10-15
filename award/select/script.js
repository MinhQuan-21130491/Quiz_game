function animateGift(gift) {
    // Add an animation class to the clicked gift (optional, if you want an animation)
    gift.classList.add('animate');

    // Wait for the animation to finish (if any), then redirect
    setTimeout(function() {
        // Redirect to another page, e.g., "reward.html"
        window.location.href = "/award/result/index.html";
    }, 600);  // Adjust the delay to match the length of your animation
}
