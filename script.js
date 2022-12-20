window.addEventListener("DOMContentLoaded", () => {
  /**MOBILE MENU */
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

  /**ACTIVE MENU ITEM */
  let current = 0;
  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
  }
  document.links[current].className = 'active';

  /**COOKIE BANNER */
  document.getElementById('close').onclick = function(){
    this.parentNode.remove();
    return false;
  };
});
