import {
  createImageElement,
  createPageElement,
  appendElement,
} from "./utility";

export const loadMenuPage = () => {
  const mainContent = createPageElement("main", null, "main");
  appendElement(document.getElementById("content"), mainContent);
};
