import {
  CaliforniaRoll,
  CurryBeefUdon,
  GyuDon,
  IcedOolongTea,
  KatsuDon,
  MatchaLatte,
  PassionfruitSoda,
  RainbowRoll,
  ShrimpTempuraRoll,
  TokyoShoyuRamen,
  UnagiDon,
  VegetarianShoyuRamen,
} from "./img/imgIndex";
import { createMenuItem } from "./utility";

const menuItems = [
  {
    name: "California Roll (6)",
    desc: "Imitation crabstick, cucumber, avocado",
    img: CaliforniaRoll,
    price: "7.00",
  },
  {
    name: "Rainbow Roll (8)",
    desc: "Crab, avocado, cucumber, topped with tuna, yellowtail, salmon, and whitefish.",
    img: RainbowRoll,
    price: "17.00",
  },
];

function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");

  for (const item of menuItems) {
    menu.appendChild(
      createMenuItem(item.name, item.desc, item.img, item.price)
    );
  }

  return menu;
}

function loadMenuPage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createMenuPage());
}

export default loadMenuPage;
