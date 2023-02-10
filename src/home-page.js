import Ramen from "./img/kuro-ramen.jpg";
import {
  createImageElement,
  createPageElement,
  appendElement,
} from "./utility";

export const loadHomePage = () => {
  const mainContent = createPageElement("main", null, "main");
  appendElement(document.getElementById("content"), mainContent);

  appendElement(
    mainContent,
    createImageElement(
      Ramen,
      "Our signature tonkotsu(pork bone) broth ramen with secret house made black garlic oil. Toppings include chashu, egg, menma, corn, narutomaki, and green onions.",
      "restaurant-img"
    ),
    createPageElement(
      "p",
      "Experience our welcoming atmosphere and catchy tunes as you enjoy one of our handcrafted ramen or rice dishes, complete with a refreshing tea, soda, or latte drink. Of course, we have many appetizers you can partake in as well.",
      "restaurant-blurb"
    )
  );
};
