import { loadHomePage } from "./home-page";
import { loadMenuPage } from "./menu-page";
import { loadHeader } from "./load-header";
import "./style.css";

loadHeader();
loadHomePage();

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", () => {
  document.querySelector(".main").remove();
  loadHomePage();
});

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  document.querySelector(".main").remove();
  loadMenuPage();
});

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
  console.log("asdf");
});
