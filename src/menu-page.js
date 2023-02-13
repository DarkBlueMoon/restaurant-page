import CaliforniaRoll from "./img/california-roll.jpg";
import CurryBeefUdon from "./img/curry-beef-udon.jpg";
import GyuDon from "./img/gyu-don.jpg";
import IcedOolongTea from "./img/iced-oolong-tea.jpg";
import KatsuDon from "./img/katsu-don.jpg";
import MatchaLatte from "./img/matcha-latte.jpg";
import PassionfruitSoda from "./img/passionfruit-soda.jpg";
import RainbowRoll from "./img/rainbow-roll.jpg";
import ShrimpTempuraRoll from "./img/shrimp-tempura-roll.jpg";
import TokyoShoyuRamen from "./img/tokyo-shoyu-ramen.jpg";
import UnaguDon from "./img/unagi-don.jpg";
import VegetarianShoyuRamen from "./img/vegetarian-shoyu-ramen.jpg";

import {
  createImageElement,
  createPageElement,
  appendElement,
} from "./utility";

export const loadMenuPage = () => {
  const mainContent = createPageElement("main", null, "main");
  appendElement(document.getElementById("content"), mainContent);

  const itemContainer = createPageElement("div", null, "item-container");
  const item = createPageElement("div", null, "item");
  appendElement(mainContent, itemContainer);
  appendElement(itemContainer, item);
  appendElement(
    item,
    createImageElement(CaliforniaRoll, "Image of california roll", null),
    createPageElement("p", "California Roll -- $$$"),
    createPageElement("p", "Imitation crabstick, cucumber, avocado")
  );
};
