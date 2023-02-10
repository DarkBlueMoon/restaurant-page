import { createPageElement, appendElement } from "./utility";

export const loadHeader = () => {
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
};
