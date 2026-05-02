import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = !menu.classList.contains("hidden");

    if (isOpen) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    } else {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    }
  });

  document.addEventListener("click", function () {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  });
});
