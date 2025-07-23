import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg";

const app = document.getElementById("app");
app.innerHTML = "";

// HEADER
const header = document.createElement("header");
header.id = "header";

// Imagen + nombre superpuesto
const container = document.createElement("div");
container.className = "image-container";

const img = document.createElement("img");
img.src = headerPhoto;
img.alt = "Header Photo";

const name = document.createElement("h2");
name.textContent = "Juan Roma";
name.className = "name";

// Estructura correcta: img y h2 dentro del contenedor
container.appendChild(img);
container.appendChild(name);

// CARD con texto
const card = document.createElement("div");
card.className = "card";

const title = document.createElement("h1");
title.textContent = "About Me";

const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

card.appendChild(title);
card.appendChild(text);

// Agrega todo al header
header.appendChild(container);
header.appendChild(card);

// MAIN
const main = document.createElement("main");
main.id = "main";
main.textContent = "Main content goes here.";

// FOOTER
const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Footer content";

// Agregar todo al DOM
app.append(header, main, footer);
