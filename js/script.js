document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".container-fluid");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
