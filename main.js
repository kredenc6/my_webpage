document.getElementById("menu_icon").addEventListener("click",toggleMobileMenu);
const mobileMenuNode = document.getElementById("mobile_menu");
const menuIconContainerNode = document.getElementById("menu_icon_container");

let menuVisible = false;
function toggleMobileMenu() {
  if(menuVisible) {
    mobileMenuNode.style.display = "none";
    menuIconContainerNode.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    menuVisible = false;
  }
  else {
    mobileMenuNode.style.display = "block";
    menuIconContainerNode.style.backgroundColor = "rgba(0, 0, 0, 0)";
    menuVisible = true;
  }
}

function hideLoadingMessage() {
  document.getElementById("loading_message").style.display = "none";
}