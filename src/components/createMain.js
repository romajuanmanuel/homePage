import gifApi from "../assets/gifApi.png";
import todoListImg from "../assets/todoList.png";
import weatherAppImg from "../assets/weatherApi.png";
import tictactoeImg from "../assets/tictactoe.png";
import witcherPageImg from "../assets/witcherPage.png";
import library from "../assets/library.png";

export function createMain() {
    const main = document.createElement("main");
    main.id = "main";

    const gridContainer = document.createElement("div");
    gridContainer.className = "grid-container";

    const titles = [
        "GIF GENERATOR",
        "TODO LIST APP",
        "WEATHER APP",
        "TIC TAC TOE GAME",
        "WITCHER PAGE",
        "BOOK LIBRARY"
    ];

    const texts = [
        "Search and display trending or custom GIFs using the Giphy API.",
        "Organize your daily tasks efficiently with a responsive to-do list.",
        "Get real-time weather updates based on your current location.",
        "Play a classic game of Tic Tac Toe with clean, interactive UI.",
        "A fan-made Witcher-themed page featuring characters and lore.",
        "Manage your personal book collection—add, view, and remove books."
    ];

    const images = [
        gifApi,
        todoListImg,
        weatherAppImg,
        tictactoeImg,
        witcherPageImg,
        library
    ];

    const linksPerItem = [
        ["api-gif", "https://romajuanmanuel.github.io/api-gif/"],
        ["todolist2", "https://romajuanmanuel.github.io/todolist2/"],
        ["api-weather", "https://romajuanmanuel.github.io/api-weather/"],
        ["tic-tac-toe", "https://romajuanmanuel.github.io/tic-tac-toe/"],
        ["WitcherPage", "https://romajuanmanuel.github.io/WitcherPage/"],
        ["book-library", "https://romajuanmanuel.github.io/book-library/"]
    ];

    for (let i = 0; i < titles.length; i++) {
        const item = createGridItem(
            titles[i],
            texts[i],
            createImage(images[i], titles[i], linksPerItem[i][1]), // <-- ahora con href
            createGridIcons(
                `https://github.com/romajuanmanuel/${linksPerItem[i][0]}`,
                "smart_display",
                linksPerItem[i][1]
            )
        );
        gridContainer.appendChild(item);
    }

    main.appendChild(gridContainer);
    return main;
}

function createImage(src, alt, href) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    link.appendChild(img);
    return link;
}

function createGridIcons(githubUrl, materialIconName, materialLink) {
    const container = document.createElement("div");
    container.className = "card-icons";

    const iconLink = document.createElement("a");
    iconLink.href = materialLink;
    iconLink.target = "_blank";
    iconLink.rel = "noopener noreferrer";

    const span = document.createElement("span");
    span.className = "material-symbols-outlined icon-style";
    span.textContent = materialIconName;

    iconLink.appendChild(span);
    container.appendChild(iconLink);

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

function createGridItem(titleText, paragraphText, extra, iconsEl = null) {
    const item = document.createElement("div");
    item.className = "grid-item";
    if (extra) item.appendChild(extra);

    const h3 = document.createElement("h3");
    h3.textContent = titleText;
    item.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = paragraphText;
    item.appendChild(p);

    if (iconsEl) item.appendChild(iconsEl);

    return item;
}
