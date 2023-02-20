import {
  CaliforniaRoll,
  GyuDon,
  IcedOolongTea,
  KatsuDon,
  KuroRamen,
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
  {
    name: "Shrimp Tempura Roll (6)",
    desc: "Shrimp, avocado",
    img: ShrimpTempuraRoll,
    price: "10.50",
  },
  {
    name: "Kuro Ramen",
    desc: "Our signature tonkotsu(pork bone) broth ramen with secret house made black garlic oil. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
    img: KuroRamen,
    price: "18.40+",
  },
  {
    name: "Tokyo Shoyu Ramen",
    desc: "Shoyu ramen is a ramen noodle dish flavored with shoyu, the Japanese word for soy sauce. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
    img: TokyoShoyuRamen,
    price: "16.10+",
  },
  {
    name: "Vegetarian Shoyu Ramen",
    desc: "Two pieces of fried tofu, corn, wakame seaweed, menma in our in a light shoyu (Japanese soy sauce) and kelp soup base. Garnished with green onions.",
    img: VegetarianShoyuRamen,
    price: "16.00+",
  },
  {
    name: "Gyu Don",
    desc: "Thinly sliced beef simmered with tender onions, savory-sweet sauce",
    img: GyuDon,
    price: "16.10+",
  },
  {
    name: "Unagi Don",
    desc: "Sweet caramelized soy-based sauce (called tare) drizzled over perfectly grilled unagi and steamed rice.",
    img: UnagiDon,
    price: "18.40",
  },
  {
    name: "Katsu Don",
    desc: "Japanese rice bowl topped with pork cutlet nestled in pillowy eggs and onions simmered in a sweet-savory sauce",
    img: KatsuDon,
    price: "18.40+",
  },
  {
    name: "Matcha Latte",
    desc: "Smooth and creamy matcha sweetened just right and served with milk. This favorite will transport your senses to pure green delight.",
    img: MatchaLatte,
    price: "6.60",
  },
  {
    name: "Passionfruit Soda",
    desc: "",
    img: PassionfruitSoda,
    price: "6.60",
  },
  {
    name: "Iced Oolong Tea",
    desc: "",
    img: IcedOolongTea,
    price: "5.50",
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
