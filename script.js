let truisms = [];
const messageCount = 10;
const messageURL = `http://localhost:3000/truisms/airbnb/${messageCount}`;
// const MessageURL = "https://aiphorisms-2f3775e1ef4b.herokuapp.com/";

document.addEventListener("DOMContentLoaded", function () {
  fetchMessages(10); //initial fetch
  const scrollingTextElement = document.getElementById("scrolling-text");

  // Listen for the end of each animation iteration
  scrollingTextElement.addEventListener("animationiteration", () => {
    displayNextMessage();
  });
});

function fetchMessages(number = 1) {
  console.log(`fetching ${number} messages`);
  fetch(messageURL)
    .then((response) => response.json())
    .then((data) => {
      // Assuming the server responds with an array of aphorisms in data.truisms
      // Loop through the array and handle each truism
      data.truisms.forEach((truism) => {
        truisms.push(truism);
        console.log(truism);
      });
      // Display the next message after adding all new ones
      displayNextMessage();
    })
    .catch((error) => {
      console.error("Error fetching truisms:", error);
      displayMessage("Error loading truisms. Please try again.");
    });
}

function displayNextMessage() {
  if (truisms.length > 0) {
    displayMessage(truisms.shift());
  } else {
    fetchMessages();
  }
}

function displayMessage(text) {
  const scrollingTextElement = document.getElementById("scrolling-text");
  scrollingTextElement.innerText = text;
}
