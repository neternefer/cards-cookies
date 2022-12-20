/**MOBILE MENU */
window.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".icon-menu");
  const mobileMenu = document.querySelector(".hidden-mobile");

  function showMenu() {
    if (mobileMenu.style.display == "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  }

  hamburgerIcon.onclick = () => {
    showMenu();
  };
});
