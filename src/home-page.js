import Ramen from "./img/ramen.jpg";

import { createHeader, createImage, createFooter } from "./utility";

function createMainContent() {
  const main = document.createElement("main");
  main.classList.add("main");

  const topDesc = document.createElement("p");
  topDesc.textContent =
    "Come warm your body and soul with a delicious bowl of ramen!";
  const botDesc = document.createElement("p");
  botDesc.textContent = "While you're at it, enjoy one of our appetizers!";

  const img = createImage(Ramen, "An illustration of a bowl of ramen");

  main.appendChild(topDesc);
  main.appendChild(img);
  main.appendChild(botDesc);

  return main;
}

function loadHomePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createMainContent());
  contentDiv.appendChild(createFooter());
}

export default loadHomePage;
