import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg"; 

const app = document.getElementById("app");
app.innerHTML = "";
const header = document.createElement("header");
header.id = "header";
const img = document.createElement("img");
img.src = headerPhoto;
img.alt = "Header Photo";
header.appendChild(img);

const card = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "About Me";

const text = document.createElement("p");
text.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

card.className = "card";
card.appendChild(title);
card.appendChild(text);
header.appendChild(card);



const main = document.createElement("main");
main.id = "main";
main.textContent = "Main content goes here.";

const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Footer content";

app.append(header,main,footer);