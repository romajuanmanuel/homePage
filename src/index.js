import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg";
import gifApi from "./assets/gifApi.png";

/* ------------------ INIT ------------------ */
const app = document.getElementById("app");
app.innerHTML = "";

/* ------------------ HEADER ------------------ */
const header = document.createElement("header");
header.id = "header";

/* ---------- Image + Name ---------- */
const container = document.createElement("div");
container.className = "image-container";

const img = document.createElement("img");
img.src = headerPhoto;
img.alt = "Header Photo";

const name = document.createElement("h2");
name.textContent = "Juan Roma";
name.className = "name";

container.appendChild(img);
container.appendChild(name);

/* ---------- Text Card ---------- */
const card = document.createElement("div");
card.className = "card";

// Title
const title = document.createElement("h1");
title.textContent = "About Me";

// Text
const text = document.createElement("p");
text.textContent = "Hello! I'm Juan Roma, a passionate web developer with a love for creating beautiful and functional websites. I enjoy coding, learning new technologies, and sharing my knowledge with others.";

// Icons container (optional for layout clarity)
const iconsContainer = document.createElement("div");
iconsContainer.className = "card-icons";

// GitHub + LinkedIn icons
const githubIcon = document.createElement("i");
githubIcon.className = "devicon-github-original icon-style";

const linkedInIcon = document.createElement("i");
linkedInIcon.className = "devicon-linkedin-plain icon-style";

// Append icons
iconsContainer.appendChild(linkedInIcon);
iconsContainer.appendChild(githubIcon);

// Append all card content
card.appendChild(title);
card.appendChild(text);
card.appendChild(iconsContainer);

// Append to header
header.appendChild(container);
header.appendChild(card);

/* ------------------ MAIN ------------------ */
const main = document.createElement("main");
main.id = "main";

const gifImg = document.createElement("img");
gifImg.src = gifApi;
gifImg.alt = "GIF API";



// Add a simple grid layout for main content
const gridContainer = document.createElement("div");          
gridContainer.className = "grid-container";
const gridItem1 = document.createElement("div");
gridItem1.className = "grid-item";
const gridItem2 = document.createElement("div");
gridItem2.className = "grid-item";
gridItem2.textContent = "Grid Item 2";
const gridItem3 = document.createElement("div");
gridItem3.className = "grid-item";
gridItem3.textContent = "Grid Item 3";
const gridItem4 = document.createElement("div");
gridItem4.className = "grid-item";
gridItem4.textContent = "Grid Item 4";
const gridItem5 = document.createElement("div");
gridItem5.className = "grid-item";
gridItem5.textContent = "Grid Item 5";
const gridItem6 = document.createElement("div");
gridItem6.className = "grid-item";
gridItem6.textContent = "Grid Item 6";
const gridItem7 = document.createElement("div");
gridItem7.className = "grid-item";
gridItem7.textContent = "Grid Item 7";
const gridItem8 = document.createElement("div");
gridItem8.className = "grid-item";
gridItem8.textContent = "Grid Item 8";
gridContainer.append(gridItem1, gridItem2, gridItem3, gridItem4,gridItem5, gridItem6, gridItem7, gridItem8);

gridItem1.appendChild(gifImg);
main.appendChild(gridContainer);






/* ------------------ FOOTER ------------------ */
const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Footer content";

/* ------------------ HEAD INJECTION ------------------ */
const deviconLink = document.createElement("link");
deviconLink.rel = "stylesheet";
deviconLink.type = "text/css";
deviconLink.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
document.head.appendChild(deviconLink);

/* ------------------ DOM MOUNT ------------------ */
app.append(header, main, footer);
