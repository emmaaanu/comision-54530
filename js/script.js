const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

// Verificar el estado almacenado en localStorage al cargar la página
window.onload = function () {
  const isOpen = localStorage.getItem("menuOpen") === "true";
  dropDownMenu.classList.toggle("open", isOpen);
  toggleBtnIcon.classList.toggle("fa-xmark", isOpen);
};

// Función para guardar el estado del menú en localStorage
function saveMenuState(isOpen) {
  localStorage.setItem("menuOpen", isOpen);
}

toggleBtn.onclick = function (event) {
  event.stopPropagation(); // Evitar que el evento se propague a los enlaces

  const isOpen = dropDownMenu.classList.toggle("open");
  toggleBtnIcon.classList.toggle("fa-xmark", isOpen);

  saveMenuState(isOpen);
};

// Cerrar el menú cuando se hace clic en un enlace
const links = document.querySelectorAll(".dropdown_menu a");
links.forEach(function (link) {
  link.onclick = function () {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList.remove("fa-xmark");
    saveMenuState(false);
  };
});
