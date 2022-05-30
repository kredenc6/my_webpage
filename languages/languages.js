const languages = {
  en: {
    shared: {
      nav: ["home", "about", "contact", "portfolio"],
      footer: [`© ${new Date().getFullYear()} All Rights Reserved`]
    },

    about: {
      heading: ["Info about ", "Me"],
      subheading: ["Allow me", " to start by..."],
      info: [
        "...introducing myself. My name is Filip Šrankota. I'm a self-tought web developer based near Prague. My main focus has mostly been on front-end. Some of my skills are demonstrated on this site and in the portfolio page. They include HTML, CSS, JavaScript and mainly ReactJS. Lately these were joined with a little bit of TypeScript, Material-UI and NodeJS.",
        "I'm currently looking for a job position - junior (aspiring midstack) web/web-app developer to start working with a team, keep growing my skills and applying those I've already learned.",
        "If you are interested in working with me or just want more information about my work, I would love to hear from you! You can contact me by filling out the form on the contact page."
      ]
    },

    contact: {
      heading: ["Get in ", "touch"],
      subheading: ["Let's ", "start working together..."],
      loadingMessage: ["loading google form..."]
    },

    portfolio: {
      heading: ["My", " Projects"],
      subheading: ["Feel free to take ", "a look"],
      liveViewText: ["Live View"],
      viewCodeText: ["View Code"],
      projectNames: ["Metacules", "Typing practice", "Simple chat-app", "Setup wizard", "Pexeso - memory game", "Simple calculator"],
      usedTechnologies: ["Used technologies:"],
      metaculesNote: ["*3 month cooperation"]
    }
  },

  cz: {
    shared: {
      nav: ["domů", "o mně", "kontakt", "portfolio"],
      footer: [`© ${new Date().getFullYear()} Všechna práva vyhrazena`]
    },

    about: {
      heading: ["Info o ", "mně"],
      subheading: ["Dovolte mi", " se nejdříve..."],
      info: [
        "...představit. Jmenuji se Filip Šrankota. Jsem web developer samouk žijící blízko Prahy. Prozatím se zaměřuji především na front-end technologie. Některé z mých dovedností jsou prezentovány na těchto stránkách a v portfolio záložce. Zahrnují HTML, CSS, JavaScript a především ReactJS. V poslední době se k tomu přidala troška TypeScriptu, Material-UI a NodeJS.",
        "Aktuálně hledám zaměstnání na pozici - junior (aspirující midstack) web/web-app developer. Rád bych začal pracovat v týmu, dál rozvíjel své dovednosti a uplatňoval ty, které jsem se již naučil.",
        "Pokud máte zájem se mnou navázat spolupráci, nebo byste rád/a více informací o mých projektech, neváhejte mě kontaktovat! Spojit se se mnou můžete vyplněním formuláře v záložce kontakt."
      ]
    },

    contact: {
      heading: ["Kontaktujte ", "mě"],
      subheading: ["Pusťme ", "se do práce..."],
      loadingMessage: ["načítám google formulář..."]
    },

    portfolio: {
      heading: ["Mé", " projekty"],
      subheading: ["Neváhejte se ", "podívat"],
      liveViewText: ["Živý náhled"],
      viewCodeText: ["Zhlédnout kód"],
      projectNames: ["Metacules", "Psaní všemi deseti", "Chatovací appka", "Průvodce nastavením", "Pexeso", "Kalkulačka"],
      usedTechnologies: ["Použité technologie:"],
      metaculesNote: ["*3 měsíční spolupráce"]
    }
  }
};

export default languages;
