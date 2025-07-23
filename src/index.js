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
card.appendChild(cardText);
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

const todoList = document.createElement("img");
todoList.src = todoListImg;
todoList.alt = "Todo List App";


// Simplified grid layout for main content
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

// Helper to create grid items con título y párrafo
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

// Arrays de títulos y textos
const titles = [
    "Gif Generator",
    "Weather App",
    "Dynamic User interface",
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

// Primer ítem con imagen
const gridItem1 = createGridItem(titles[0], texts[0], gifImg);
gridContainer.appendChild(gridItem1);
const gridItem2 = createGridItem(titles[1], texts[1], todoListImg);
gridContainer.appendChild(gridItem2);

// Resto de los ítems sin imagen
for (let i = 2; i < titles.length; i++) {
    gridContainer.appendChild(createGridItem(titles[i], texts[i]));
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
