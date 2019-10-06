// *********************************
// ********** MOBILE MENU **********
// *********************************

const mobileMenuNode = document.getElementById("mobile_menu");
const menuIconContainerNode = document.getElementById("menu_icon_container");
const menuIconNode = document.getElementById("menu_icon");
const closeIconNode = document.getElementById("close_icon");

closeIconNode.style.display = "none";
document.getElementById("menu_icon").addEventListener("click",showMobileMenu);
document.getElementById("close_icon").addEventListener("click",hideMobileMenu);

function showMobileMenu() {
  mobileMenuNode.style.display = "block";
  closeIconNode.style.display = "inline";
  menuIconNode.style.display = "none";
  menuIconContainerNode.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function hideMobileMenu() {
  mobileMenuNode.style.display = "none";
  closeIconNode.style.display = "none";
  menuIconNode.style.display = "inline";
  menuIconContainerNode.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
}

// ***** GOOGLE FORM LOADING *****
function hideLoadingMessage() {
  document.getElementById("loading_message").style.display = "none";
}


