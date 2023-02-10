import Ramen from "./kuro-ramen.jpg";

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

function createImageElement(src, altText, ...classes) {
  const img = new Image();
  img.src = src ?? "";
  img.alt = altText ?? "";

  for (const cls of classes) {
    img.classList.add(cls);
  }

  return img;
}

export const pageLoad = () => {
  const contentDiv = document.getElementById("content");

  // ----- HEADER -----
  const header = createPageElement("header", null, "header");
  const title = createPageElement("h1", "Really Rad Ramen", "restaurant-title");
  const nav = createPageElement("nav", null, "navigation");

  appendElement(contentDiv, header);
  appendElement(header, title, nav);
  appendElement(
    nav,
    createPageElement("button", "Home", "btn", "home"),
    createPageElement("button", "Menu", "btn", "menu"),
    createPageElement("button", "Contact", "btn", "contact")
  );

  // ----- MAIN -----
  const mainContent = createPageElement("main", null, "main");
  appendElement(contentDiv, mainContent);

  appendElement(
    mainContent,
    createImageElement(
      Ramen,
      "Our signature tonkotsu(pork bone) broth ramen with secret house made black garlic oil. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
      "restaurant-img"
    ),
    createPageElement(
      "p",
      "Experience our welcoming atmosphere and catchy tunes as you enjoy one of our handcrafted ramen or rice dishes, complete with a refreshing tea, soda, or latte drink. Of course, we have many appetizers you can partake in as well.",
      "restaurant-blurb"
    )
  );
};
