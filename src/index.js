//index.js
/* ------------------ IMPORTS ------------------ */
import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg";
import gifApi from "./assets/gifApi.png";
import todoListImg from "./assets/todoList.png";

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
const cardText = document.createElement("p");
cardText.textContent = "Hello! I'm Juan Roma, a passionate web developer with a love for creating beautiful and functional websites. I enjoy coding, learning new technologies, and sharing my knowledge with others.";

// Icons container
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
card.appendChild(cardText);
card.appendChild(iconsContainer);

// Append to header
header.appendChild(container);
header.appendChild(card);

/* ------------------ MAIN ------------------ */
const main = document.createElement("main");
main.id = "main";

/* ---------- Grid Helper Functions ---------- */
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

// Crea una nueva imagen
function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

// Crea un grid item con título, texto y opcionalmente una imagen
function createGridItem(titleText, paragraphText, extra) {
    const item = document.createElement("div");
    item.className = "grid-item";

    if (extra) item.appendChild(extra);

    if (titleText) {
        const title = document.createElement("h3");
        title.textContent = titleText;
        item.appendChild(title);
    }

    if (paragraphText) {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphText;
        item.appendChild(paragraph);
    }

    return item;
}

/* ---------- Grid Content Data ---------- */
const titles = [
    "Gif Generator",
    "Weather App",
    "Dynamic User Interface",
    "Todo List",
    "Witcher Page",
    "Tic Tac Toe",
    "Testimonials",
    "Contact"
];

const texts = [
    "This is a grid item. You can add more content here.",
    "Explore our latest products.",
    "Join our newsletter for updates.",
    "Check out our gallery.",
    "Meet the team behind the scenes.",
    "Discover our story.",
    "See what customers are saying.",
    "Contact us for more information."
];

const images = [
    createImage(gifApi, "GIF API"),
    createImage(todoListImg, "Todo List App")
];

/* ---------- Populate Grid ---------- */
for (let i = 0; i < titles.length; i++) {
    const img = images[i] || null;
    const item = createGridItem(titles[i], texts[i], img);
    gridContainer.appendChild(item);
}

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
