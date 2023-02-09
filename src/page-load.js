function createPageElement(type, text, ...classes) {
  const elem = document.createElement(type);
  elem.textContent = text ?? "";

  for (const cls of classes) {
    elem.classList.add(cls);
  }

  return elem;
}

function appendElement(elem, ...append) {
  for (const ap of append) {
    elem.appendChild(ap);
  }
}

function createList(listContainer, ...listText) {
  for (const text of listText) {
    const li = createPageElement("li", text, text.toLowerCase());
    listContainer.appendChild(li);
  }
}

export const pageLoad = () => {
  const contentDiv = document.getElementById("content");

  // ----- HEADER -----
  const header = createPageElement("header");
  const title = createPageElement("h1", "Really Rad Ramen", "restaurant-title");
  const nav = createPageElement("nav", null, "navigation");
  const ul = createPageElement("ul", null);

  appendElement(contentDiv, header);
  appendElement(header, title, nav);
  appendElement(nav, ul);
  createList(ul, "Home", "Menu", "Contact");

  // ----- MAIN -----

  // ----- FOOTER -----
};
