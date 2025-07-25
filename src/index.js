import "./styles.css";
import { createHeader } from "./components/createHeader";
import { createCard } from "./components/createCard";
import { createMain } from "./components/createMain";
import { createFooter } from "./components/createFooter";
import { injectHeadLinks } from "./components/injectHeadLinks";

const app = document.getElementById("app");
app.innerHTML = "";

injectHeadLinks();
const header = createHeader();
const card = createCard();
const main = createMain();
const footer = createFooter();

header.appendChild(card);
app.append(header, main, footer);
