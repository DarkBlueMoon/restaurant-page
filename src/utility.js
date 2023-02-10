export function createPageElement(type, text, ...classes) {
  const elem = document.createElement(type);
  elem.textContent = text ?? "";

  for (const cls of classes) {
    elem.classList.add(cls);
  }

  return elem;
}

export function appendElement(elem, ...append) {
  for (const ap of append) {
    elem.appendChild(ap);
  }
}

export function createImageElement(src, altText, ...classes) {
  const img = new Image();
  img.src = src ?? "";
  img.alt = altText ?? "";

  for (const cls of classes) {
    img.classList.add(cls);
  }

  return img;
}
