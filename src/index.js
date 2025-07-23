import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg"; 

const app = document.getElementById("app");
app.innerHTML = "";


const header = document.createElement("header");
header.id = "header";

const title = document.createElement("h1");
title.textContent = "Header content";
header.appendChild(title);

const img = document.createElement("img");
img.src = headerPhoto;
img.alt = "Header Photo";
header.appendChild(img);

app.appendChild(header);

const main = document.createElement("main");
main.id = "main";
main.textContent = "Main content goes here.";
app.appendChild(main);

const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Footer content";
app.appendChild(footer);

