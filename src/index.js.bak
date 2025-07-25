// index.js
/* ------------------ IMPORTS ------------------ */
import "./styles.css";
import headerPhoto from "./assets/headerPhoto.jpg";
import gifApi from "./assets/gifApi.png";
import todoListImg from "./assets/todoList.png";
import weatherAppImg from "./assets/weatherApi.png";
import tictactoeImg from "./assets/tictactoe.png";
import witcherPageImg from "./assets/witcherPage.png";
import library from "./assets/library.png";

/* ------------------ INIT ------------------ */
const app = document.getElementById("app");
app.innerHTML = "";

/* ------------------ HEADER ------------------ */
const header = document.createElement("header");
header.id = "header";

/* ─── Iris‑Wipe Image + Name ─── */
const wrapper = document.createElement("div");
wrapper.className = "scene-wrapper";
wrapper.setAttribute("tabindex", "0");

// Primera capa: la foto de header
const scene1 = document.createElement("div");
scene1.className = "scene scene-1";
scene1.style.backgroundImage = `url(${headerPhoto})`;

// Segunda capa: overlay para revelar el nombre
const scene2 = document.createElement("div");
scene2.className = "scene scene-2";
const titleOverlay = document.createElement("h2");
titleOverlay.className = "scene-title";
titleOverlay.textContent = "Juan Roma";
scene2.appendChild(titleOverlay);

// Montaje
wrapper.append(scene1, scene2);
header.appendChild(wrapper);

/* ------------------ SOBRE MÍ (card) ------------------ */
const card = document.createElement("div");
card.className = "card";

// Title
const title = document.createElement("h1");
title.textContent = "ABOUT ME";

// Text
const cardText = document.createElement("p");
cardText.textContent =
    "HELLO! I'M JUAN ROMA, A PASSIONATE WEB DEVELOPER WITH A LOVE FOR CREATING BEAUTIFUL AND FUNCTIONAL WEBSITES. I ENJOY CODING, LEARNING NEW TECHNOLOGIES, AND SHARING MY KNOWLEDGE WITH OTHERS.";

// Íconos de LinkedIn y GitHub
function createCardIcons(linkedInUrl, githubUrl) {
    const container = document.createElement("div");
    container.className = "card-icons";

    // LinkedIn
    const linkedInLink = document.createElement("a");
    linkedInLink.href = linkedInUrl;
    linkedInLink.target = "_blank";
    linkedInLink.rel = "noopener noreferrer";

    const linkedInIcon = document.createElement("i");
    linkedInIcon.className = "devicon-linkedin-plain icon-style";

    linkedInLink.appendChild(linkedInIcon);
    container.appendChild(linkedInLink);

    // GitHub
    const githubLink = document.createElement("a");
    githubLink.href = githubUrl;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";

    const githubIcon = document.createElement("i");
    githubIcon.className = "devicon-github-original icon-style";

    githubLink.appendChild(githubIcon);
    container.appendChild(githubLink);

    return container;
}

const cardIcons = createCardIcons(
    "https://linkedin.com/in/romajuanmanuel",
    "https://github.com/romajuanmanuel"
);

card.append(title, cardText, cardIcons);
header.appendChild(card);

/* ------------------ MAIN (grid) ------------------ */
const main = document.createElement("main");
main.id = "main";
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

// Material Icons + GitHub por tarjeta
function createGridIcons(githubUrl, materialIconName, materialLink) {
    const container = document.createElement("div");
    container.className = "card-icons";

    if (materialLink && materialIconName) {
        const iconLink = document.createElement("a");
        iconLink.href = materialLink;
        iconLink.target = "_blank";
        iconLink.rel = "noopener noreferrer";

        const span = document.createElement("span");
        span.className = "material-symbols-outlined icon-style";
        span.textContent = materialIconName;

        iconLink.appendChild(span);
        container.appendChild(iconLink);
    }

    if (githubUrl) {
        const githubLink = document.createElement("a");
        githubLink.href = githubUrl;
        githubLink.target = "_blank";
        githubLink.rel = "noopener noreferrer";

        const githubIcon = document.createElement("i");
        githubIcon.className = "devicon-github-original icon-style";

        githubLink.appendChild(githubIcon);
        container.appendChild(githubLink);
    }

    return container;
}

function createGridItem(titleText, paragraphText, extra, iconsEl = null) {
    const item = document.createElement("div");
    item.className = "grid-item";

    if (extra) item.appendChild(extra);

    if (titleText) {
        const h3 = document.createElement("h3");
        h3.textContent = titleText;
        item.appendChild(h3);
    }

    if (paragraphText) {
        const p = document.createElement("p");
        p.textContent = paragraphText;
        item.appendChild(p);
    }

    if (iconsEl) {
        item.appendChild(iconsEl);
    }

    return item;
}

const titles = [
    "GIF GENERATOR",
    "TODO LIST APP",
    "WEATHER APP",
    "TIC TAC TOE GAME",
    "WITCHER PAGE",
    "BOOK LIBRARY"
];

const texts = [
    "THIS IS A GRID ITEM. YOU CAN ADD MORE CONTENT HERE.",
    "EXPLORE OUR LATEST PRODUCTS.",
    "JOIN OUR NEWSLETTER FOR UPDATES.",
    "CHECK OUT OUR GALLERY.",
    "MEET THE TEAM BEHIND THE SCENES.",
    "DISCOVER OUR STORY."
];

const images = [
    createImage(gifApi, "GIF API"),
    createImage(todoListImg, "Todo List App"),
    createImage(weatherAppImg, "Weather App"),
    createImage(tictactoeImg, "Tic Tac Toe Game"),
    createImage(witcherPageImg, "Witcher Page"),
    createImage(library, "Book Library"),
];

// En cada ítem: GitHub + Material Icon opcional
const linksPerItem = [
    createGridIcons("https://github.com/romajuanmanuel/api-gif", "smart_display", "https://romajuanmanuel.github.io/api-gif/"),
    createGridIcons("https://github.com/romajuanmanuel/todolist2", "smart_display", "https://romajuanmanuel.github.io/todolist2/"),
    createGridIcons("https://github.com/romajuanmanuel/api-weather", "smart_display", "https://romajuanmanuel.github.io/api-weather/"),
    createGridIcons("https://github.com/romajuanmanuel/tic-tac-toe", "smart_display", "https://romajuanmanuel.github.io/tic-tac-toe/"),
    createGridIcons("https://github.com/romajuanmanuel/WitcherPage", "smart_display", "https://romajuanmanuel.github.io/WitcherPage/"),
    createGridIcons("https://github.com/romajuanmanuel/book-library", "smart_display", "https://romajuanmanuel.github.io/book-library/")
];

for (let i = 0; i < titles.length; i++) {
    const imgEl = images[i] || null;
    const iconsEl = linksPerItem[i] || null;
    const item = createGridItem(titles[i], texts[i], imgEl, iconsEl);
    gridContainer.appendChild(item);
}

main.appendChild(gridContainer);

/* ------------------ FOOTER ------------------ */
const footer = document.createElement("footer");
footer.id = "footer";

// Left footer section
const leftFooter = document.createElement("div");
leftFooter.className = "left-footer";

const leftFooterTitle = document.createElement("h1");
leftFooterTitle.textContent = "Contact Me";

const leftFooterParagraph = document.createElement("p");
leftFooterParagraph.textContent = "Feel free to reach out via email at: romajuanmanuel@gmail.com";

leftFooter.append(leftFooterTitle, leftFooterParagraph);

// Right footer section
const rightFooter = document.createElement("div");
rightFooter.className = "right-footer";

const rightFooterImg = document.createElement("img");
rightFooterImg.src = headerPhoto;
rightFooterImg.alt = "Contact Image";
rightFooterImg.className = "footer-image";

rightFooter.appendChild(rightFooterImg);

// Append to footer
footer.append(leftFooter, rightFooter);

// Finally append to document
document.body.appendChild(footer);

/* ------------------ HEAD INJECTION ------------------ */
const deviconLink = document.createElement("link");
deviconLink.rel = "stylesheet";
deviconLink.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
document.head.appendChild(deviconLink);

const materialIconsLink = document.createElement("link");
materialIconsLink.rel = "stylesheet";
materialIconsLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
document.head.appendChild(materialIconsLink);

/* ------------------ MOUNT ------------------ */
app.append(header, main, footer);
