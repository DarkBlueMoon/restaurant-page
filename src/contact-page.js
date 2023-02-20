function createContactPage() {
  const home = document.createElement("div");
  home.classList.add("home-container");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");
  const contactText = document.createElement("p");
  contactText.textContent = "Have any questions? Don't hesitate to call us!";
  const phoneNum = document.createElement("p");
  phoneNum.textContent = "(555)-555-5555";
  const address = document.createElement("p");
  address.textContent = "123 Main Street, Chicago, IL, USA";

  contactDiv.appendChild(contactText);
  contactDiv.appendChild(phoneNum);
  contactDiv.appendChild(address);
  home.appendChild(contactDiv);

  return home;
}

function loadContactPage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.textContent = "";
  mainDiv.appendChild(createContactPage());
}

export default loadContactPage;
