import languages from "./languages/languages.js";

// *********************************
// ********** MOBILE MENU **********
// *********************************

const mobileMenuNode = document.getElementById("mobile_menu");
const menuIconContainerNode = document.getElementById("menu_icon_container");
const menuIconNode = document.getElementById("menu_icon");
const closeIconNode = document.getElementById("close_icon");
const languageNode = document.querySelector("#header_mobile .language");

languageNode.style.display = "none";
closeIconNode.style.display = "none";
document.getElementById("menu_icon").addEventListener("click",showMobileMenu);
document.getElementById("close_icon").addEventListener("click",hideMobileMenu);

function showMobileMenu() {
  mobileMenuNode.style.display = "block";
  closeIconNode.style.display = "inline";
  languageNode.style.display = "flex";
  menuIconNode.style.display = "none";
  menuIconContainerNode.style.background = "none";
}

function hideMobileMenu() {
  mobileMenuNode.style.display = "none";
  closeIconNode.style.display = "none";
  languageNode.style.display = "none";
  menuIconNode.style.display = "inline";
  menuIconContainerNode.style.background = "linear-gradient(45deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.1))";
}


// *********************************
// ***** LANGUAGE TRANSLATION *****
// *********************************

const language = detectLanguage();
applyLanguage();

export function detectLanguage() {
  if(sessionStorage.getItem("language")) return sessionStorage.getItem("language");
  const language = window.navigator.language;
  if(language.substring(0, 2).toLowerCase() === "cz" ||
      language.substring(0, 2).toLowerCase() === "cs") {
        return "cz";
  }
  return "en";
}

function applyLanguage() {
  const pageName = detectPage();
  // all nodes with text to translate
  const header_desktopAnchorNodes = document.querySelectorAll("#header_desktop a");
  const header_mobileAnchorNodes = document.querySelectorAll("#header_mobile a");
  const headingNodes = document.getElementsByClassName("heading");
  const subheadingNodes = document.getElementsByClassName("subheading");
  const infoNodes = document.getElementsByClassName("info");
  const liveViewTextNodes = document.getElementsByClassName("liveViewText");
  const viewCodeTextNodes = document.getElementsByClassName("viewCodeText");
  const footerTextNode = document.querySelectorAll("#footerText");
  const projectNameNodes = document.querySelectorAll(".project h4");
  const usedTechNodes = document.querySelectorAll(".project h6");
  const loadingMessageNode = document.querySelectorAll("#loadingMessage");

  setInnerText(header_desktopAnchorNodes, getLangTextsArr(["shared", "nav"]));
  setInnerText(header_mobileAnchorNodes, getLangTextsArr(["shared", "nav"]));
  setInnerText(headingNodes,  getLangTextsArr([pageName, "heading"]));
  setInnerText(subheadingNodes, getLangTextsArr([pageName, "subheading"]));
  setInnerText(infoNodes, getLangTextsArr([pageName, "info"]));
  setInnerText(liveViewTextNodes, getLangTextsArr([pageName, "liveViewText"]), true);
  setInnerText(viewCodeTextNodes, getLangTextsArr([pageName, "viewCodeText"]), true);
  setInnerText(footerTextNode, getLangTextsArr(["shared", "footer"]));
  setInnerText(projectNameNodes, getLangTextsArr([pageName, "projectNames"]));
  setInnerText(usedTechNodes, getLangTextsArr([pageName, "usedTechnologies"]), true);
  setInnerText(loadingMessageNode, getLangTextsArr([pageName, "loadingMessage"]));

  // style buttons texts
  const czBttNodes = document.getElementsByClassName("language_cz");
  const enBttNodes = document.getElementsByClassName("language_en");
  if(language === "cz") {
    for(const node of czBttNodes) {
      node.classList.add("underline");
    }
    for(const node of enBttNodes) {
      node.classList.remove("underline");
    }
  }
  else {
    for(const node of enBttNodes) {
      node.classList.add("underline");
    }
    for(const node of czBttNodes) {
      node.classList.remove("underline");
    }
  }

  /**Each node on index "i" in nodes array receives text from index "i" in langTexts array
   * as innerText. If the optional repeat property is true all items in nodes array receive
   * the same value from langTexts[0]. */
  function setInnerText(nodes, langTexts, repeat) {
    if(nodes.length === 0) return;
    if(!repeat) {
      if(nodes.length !== langTexts.length) {
        console.error("Array length missmatch.");
        return;
      }
      for(let i=0; i<nodes.length; i++) {
        nodes[i].innerText = langTexts[i];
      }
    }

    else {
      if(langTexts.length === 0) {
        console.error("Received an empty array.");
        return;
      }
      if(langTexts.length > 1) console.warn("Unused array length.");
      for(const node of nodes) {
        node.innerText = langTexts[0];
      }
    }
  }

  /**Follows the path in the languages object and returns found string[ ] or an empty[&nbsp;]. */
  function getLangTextsArr(path) {
    let textData = languages[language];
    for(const step of path) {
      textData = textData[step];
      if(!textData) return [];
    }
    return textData;
  }
}

function detectPage() {
  const PAGE_NAMES = ["about", "contact", "portfolio"];
  for(const name of PAGE_NAMES) {
    if(document.documentURI.includes(name)) return name;
  }
  return "main";
}

// ***** LANGUAGE BUTTONS SETTING *****
const enBttNodes = document.getElementsByClassName("language_en");
for(const node of enBttNodes) {
  node.addEventListener("click", () => {
    sessionStorage.setItem("language", "en");
    window.location.reload();
  });
}

const czBttNodes = document.getElementsByClassName("language_cz");
for(const node of czBttNodes) {
  node.addEventListener("click", () => {
    sessionStorage.setItem("language", "cz");
    window.location.reload();
  });
}

// ***** GOOGLE FORM LANGUAGE *****
const iframeNode = document.querySelector("iframe");
if(iframeNode) {
  iframeNode.src = language === "cz" ?
  "https://docs.google.com/forms/d/e/1FAIpQLSeSBKr-xUny3dR-98A8yDFpvGwJ6q6r4dq-jlme1ITeOZmgQg/viewform?embedded=true"
  :
  "https://docs.google.com/forms/d/e/1FAIpQLScwQd4wuYeCV9EHDobtg7wrkLWjkpgRNuoKsGG6e9NPIlQGpA/viewform?embedded=true";
}


// ***** FACEBOOK SDK LANGUAGE & SCRIPT *****
function languageCode() {
  return language === "cz" ? "cs_CZ" : "en_GB";
}

function fbScriptHTMLTag() {
  const scriptNode = document.createElement("script");
  scriptNode.setAttribute("async", "true");
  scriptNode.setAttribute("defer", "true");
  scriptNode.setAttribute("crossorigin", "anonymous");
  scriptNode.setAttribute("src", `https://connect.facebook.net/${languageCode()}/sdk.js#xfbml=1&version=v6.0&appId=1981051258695498`);
  return scriptNode;
}

document.querySelector("body").append(fbScriptHTMLTag());