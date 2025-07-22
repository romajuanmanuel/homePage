  import "./styles.css";

   const app = document.getElementById("app");

// Limpia el contenido inicial (si es necesario)
app.textContent = ""; 

const header = document.createElement("header");
header.id = "header";
header.textContent = "Header content";
app.appendChild(header);

const main = document.createElement("main");
main.id = "main";
main.textContent = "Main content goes here.";
app.appendChild(main);

const footer = document.createElement("footer");
footer.id = "footer";
footer.textContent = "Footer content";
app.appendChild(footer);

    