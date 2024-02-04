document.addEventListener("DOMContentLoaded", function () {
  fetchMessage();
});

const messageURL = "http://localhost:3000/airbnb/";

function fetchMessage() {
  fetch(messageURL) // Update with your API's actual URL if hosted elsewhere
    .then((response) => response.json())
    .then((data) => {
      displayAphorism(data.truism);
    })
    .catch((error) => {
      console.error("Error fetching message:", error);
      displayAphorism("Error loading message. Please try again.");
    });
}

function displayAphorism(aphorism) {
  const displayElement = document.getElementById("message");
  displayElement.innerText = aphorism;
}
