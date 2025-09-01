const texts = {
  fi: {
    heroTitle: "Modernit ja responsiiviset kotisivut",
    heroSubtitle: "Räätälöin ja rakennan ammattimaisia nettisivuja yrityksille ja yksityishenkilöille.",
    heroBtn: "Tilaa kotisivut / Ota yhteyttä",
    portfolioTitle: "Esimerkkisivuja",
    card1Title: "Mallipohja ammatinharjoittajalle",
    card1Text: "Simppeli sivupohja erilaisille ammatinharjoittajille",
    card2Title: "Aksun joulukuuset",
    card2Text: "Laajempi ja klassinen yrityssivu, sisältää useita osioita",
    card4Title: "Special Edition Band",
    card4Text: "Persoonallisempi artistisivu esim. bändeille",
    card5Title: "Inna Visuals",
    card5Text: "Kotisivut esim. valokuvaajalle",
    card6Title: "Kuusihimaan.com",
    card6Text: "Laajempi yrityssivu verkkokauppa ja maksupalvelu integraatioilla",
    servicesTitle: "Palvelut",
    service1Title: "Nettisivut: Peruspaketti",
    service1Text: "1–3 sivua, mobiiliresponsiivinen ulkoasu, oma domain (www.yrityksesi.fi), SSL-sertifikaatti (https://).",
    service1Price: "189€/v (sis. ALV 25,5%)",
    service2Title: "Nettisivut: Laajempi paketti",
    service2Text: "4+ sivua, Peruspaketti + lisäominaisuuksia.",
    service2Price: "Alkaen 300€/v (sis. ALV 25,5%)",
    service3Title: "Räätälöity",
    service3Text: "Täysin tarpeidesi mukaan. maksupalvelut, integraatiot yms.",
    service3Price: "Pyydä tarjous",
    contactTitle: "Tilaa kotisivut / Ota yhteyttä",
    contactName: "Nimesi",
    contactEmail: "Sähköpostisi / puhelinnumero",
    contactMessage: "Kerro tarpeistasi",
    contactBtn: "Lähetä",
    modalLink: "Avaa koko demo uuteen välilehteen",
    footerText: "&copy; 2025 Easypagehub (2559295-4) – Kaikki oikeudet pidätetään"
  },
  en: {
    heroTitle: "Modern and Responsive Websites",
    heroSubtitle: "I design and build professional websites for companies and individuals.",
    heroBtn: "Order a website / Contact us",
    portfolioTitle: "Example websites",
    card1Title: "Template for freelancers",
    card1Text: "Simple template for different freelancers",
    card2Title: "Aksu Christmas Trees",
    card2Text: "A wider and classic company website with multiple sections",
    card4Title: "Special Edition Band",
    card4Text: "A more personal artist website, e.g., for bands",
    card5Title: "Inna Visuals",
    card5Text: "Website example for a photographer",
    card6Title: "Kuusihimaan.com",
    card6Text: "Wider company website with e-commerce and payment integration",
    servicesTitle: "Services",
    service1Title: "Website: Basic package",
    service1Text: "1–3 pages, mobile responsive design, own domain, SSL certificate (https://).",
    service1Price: "€189/year (incl. VAT 25.5%)",
    service2Title: "Website: Extended package",
    service2Text: "4+ pages, Basic package + extra features.",
    service2Price: "From €300/year (incl. VAT 25.5%)",
    service3Title: "Custom",
    service3Text: "Fully tailored. Payment services, integrations, etc.",
    service3Price: "Request a quote",
    contactTitle: "Order a website / Contact us",
    contactName: "Your name",
    contactEmail: "Your email / telephone number",
    contactMessage: "Describe your needs",
    contactBtn: "Send",
    modalLink: "Open full demo in a new tab",
    footerText: "&copy; 2025 Easypagehub (2559295-4) – All rights reserved"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (texts[lang] && texts[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = texts[lang][key];
      } else {
        el.innerHTML = texts[lang][key];
      }
    }
  });
}
