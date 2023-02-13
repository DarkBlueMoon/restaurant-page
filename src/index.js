import loadHomePage from "./home-page";
import { createHeader, createFooter, createMain } from "./utility";
// import { loadMenuPage } from "./menu-page";
import "./style.css";

// loadMenuPage();
function initializePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(createHeader());
  contentDiv.appendChild(createMain());
  contentDiv.appendChild(createFooter());
  loadHomePage();
}
initializePage();

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  // document.querySelector(".main").remove();
  loadHomePage();
});

// const menuBtn = document.querySelector(".menu");
// menuBtn.addEventListener("click", () => {
//   document.querySelector(".main").remove();
//   loadMenuPage();
// });

// const contactBtn = document.querySelector(".contact");
// contactBtn.addEventListener("click", () => {
//   console.log("asdf");
// });
