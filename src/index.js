import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import { createHeader, createFooter, createMain } from "./utility";
import "./style.css";

// loadMenuPage();
function initializePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createMain());
  contentDiv.appendChild(createFooter());
  // loadHomePage();
  loadMenuPage();
}
initializePage();

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  loadHomePage();
});

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  loadMenuPage();
});

// const contactBtn = document.querySelector(".contact");
// contactBtn.addEventListener("click", () => {
//   console.log("asdf");
// });
