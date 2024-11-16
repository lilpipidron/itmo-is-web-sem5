document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const reviewText = document.getElementById("reviewText").value.trim();

    if (username && reviewText) {
      const newReview = document.createElement("div");
      newReview.classList.add("review");

      // Создание структуры отзыва
      const paragraph = document.createElement("p");
      const usernameElement = document.createElement("strong");
      usernameElement.textContent = username;

      const reviewTextNode = document.createTextNode(`: ${reviewText}`);

      paragraph.appendChild(usernameElement); 
      paragraph.appendChild(reviewTextNode); 
      newReview.appendChild(paragraph); 

      document.querySelector(".reviews").appendChild(newReview);

      form.reset();

      const audio = new Audio("../audio/jeto-posle-piva.mp3");
      audio.play();
    }
  });
});
