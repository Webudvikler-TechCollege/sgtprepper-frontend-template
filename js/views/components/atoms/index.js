// Opretter et DocumentFragment (bruges til at samle flere elementer før de indsættes i DOM)
export const createFragment = () => document.createDocumentFragment();

// Opretter et <p> element
export const createParagraph = (text = '', className = '', parseHtml = false) => {
  const el = document.createElement('p');
  el.className = className;

  // Hvis parseHtml = true, indsættes HTML direkte
  if (parseHtml) {
    el.innerHTML = text;
  } else {
    // Ellers indsættes teksten som almindelig tekst (sikkert)
    el.textContent = text;
  }

  return el;
};

// Opretter et heading element (h1–h6)
export const createHeading = (level = 1, text = '', className = '') => {
  // Sikrer at level altid er mellem 1 og 6
  const safeLevel = Math.min(Math.max(level, 1), 6);

  const el = document.createElement(`h${safeLevel}`);
  el.className = className;
  el.textContent = text;

  return el;
};