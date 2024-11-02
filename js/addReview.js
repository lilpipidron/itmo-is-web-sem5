document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reviewForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const reviewText = document.getElementById("reviewText").value.trim();

        if (username && reviewText) {
            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.innerHTML = `<p><strong>${username}:</strong> ${reviewText}</p>`;

            document.querySelector(".reviews").appendChild(newReview);

            form.reset();

            const audio = new Audio("../audio/jeto-posle-piva.mp3");
            audio.play();
        }
    });
});
