document.addEventListener("DOMContentLoaded", () => {
  const currentPath = document.location.pathname;

  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    const itemPath = new URL(item.href).pathname;

    if (itemPath === currentPath) {
      item.classList.add("active");
    }
  });
});
