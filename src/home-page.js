import Ramen from "./img/ramen.jpg";

import { createImage } from "./utility";

function createHomePage() {
  const home = document.createElement("div");
  home.classList.add("home");

  const topDesc = document.createElement("p");
  topDesc.textContent =
    "Come warm your body and soul with a delicious bowl of ramen!";
  const botDesc = document.createElement("p");
  botDesc.textContent = "While you're at it, enjoy one of our appetizers!";

  const img = createImage(Ramen, "An illustration of a bowl of ramen");

  home.appendChild(topDesc);
  home.appendChild(img);
  home.appendChild(botDesc);

  return home;
}

// TODO: Add an active flag so that the currently loaded page doesn't get loaded again.
function loadHomePage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createHomePage());
}

export default loadHomePage;
