const reload = false;

document.addEventListener("DOMContentLoaded", function () {
  fetchMessage(); //initial fetch
  const scrollingTextElement = document.getElementById("scrolling-text");
  // Listen for the end of each animation iteration
  if (reload) {
    scrollingTextElement.addEventListener("animationiteration", () => {
      fetchMessage(); // Fetch a new aphorism after each scroll
    });
  }
});

// const messageURL = "http://localhost:3000/airbnb/";
const messageURL = "https://aiphorisms-2f3775e1ef4b.herokuapp.com/airbnb";

function fetchMessage() {
  fetch(messageURL)
    .then((response) => response.json())
    .then((data) => {
      displayAphorism(data.truism);
    })
    .catch((error) => {
      console.error("Error fetching truism:", error);
      displayAphorism("Error loading truism. Please try again.");
    });
}

function displayAphorism(aphorism) {
  const scrollingTextElement = document.getElementById("scrolling-text");
  scrollingTextElement.innerText = aphorism;

  if (reload) {
    // Reset the animation to trigger it again for the new text
    scrollingTextElement.style.animation = "none";
    setTimeout(() => {
      scrollingTextElement.style.animation = "";
    }, 10); // Short delay to ensure the animation resets
  }
}
