function createButton(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("btn", text.toLowerCase());
  return btn;
}

export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Really Rad Ramen";

  const nav = document.createElement("nav");
  nav.classList.add("navigation");

  const homeBtn = createButton("Home");
  const menuBtn = createButton("Menu");
  const contactBtn = createButton("Contact");

  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return header;
}

export function createImage(src, alt) {
  const img = new Image();
  img.src = src ?? "";
  img.alt = alt ?? "";

  return img;
}

export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("credit-container");

  const backgroundCredit = document.createElement("div");
  backgroundCredit.innerHTML = `<a
          href="https://www.freepik.com/free-vector/vintage-geometric-ramen-soup-background_9979159.htm#query=ramen&position=0&from_view=search&track=sph">Image
          by pikisuperstar</a> on Freepik`;

  const photoCredit = document.createElement("div");
  photoCredit.innerHTML = `Photo by <a
          href="https://unsplash.com/it/@dineshramaswamy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dinesh
          Ramaswamy</a> on <a
          href="https://unsplash.com/photos/p-sEkj6-hAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;

  footer.appendChild(backgroundCredit);
  footer.appendChild(photoCredit);

  return footer;
}

export function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}
