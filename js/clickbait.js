document.addEventListener("DOMContentLoaded", () => {
  const drawings = document.querySelectorAll(".drawing");

  drawings.forEach(drawing => {
    drawing.addEventListener("mouseenter", (event) => {
      addArrow(event);
    });

    drawing.addEventListener("mouseleave", () => {
      removeArrows();
    });
  });

  function addArrow(event) {
    const randomOffsetY = Math.floor(Math.random() * 20) + 10;

    // Создаем стрелку
    const arrow = document.createElement("img");
    arrow.src = "img/clickbait2.png"; 
    arrow.classList.add("arrow");

    arrow.style.position = "fixed";
    arrow.style.left = `${event.clientX}px`;

    if (Math.random() > 0.5) {
      arrow.style.top = `${event.clientY + randomOffsetY}px`;
    } else {
      arrow.style.top = `${event.clientY - randomOffsetY - 30}px`; 
    }

    arrow.style.zIndex = 7777; 

    document.body.appendChild(arrow);
  }

  function removeArrows() {
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => arrow.remove());
  }
});
