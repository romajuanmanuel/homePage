export function createCard() {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h1");
  title.textContent = "ABOUT ME";

  const cardText = document.createElement("p");
  cardText.textContent =
    "HELLO! I'M JUAN ROMA, A PASSIONATE WEB DEVELOPER WITH A LOVE FOR CREATING BEAUTIFUL AND FUNCTIONAL WEBSITES. I ENJOY CODING, LEARNING NEW TECHNOLOGIES, AND SHARING MY KNOWLEDGE WITH OTHERS.";

  const cardIcons = createCardIcons(
    "https://linkedin.com/in/romajuanmanuel",
    "https://github.com/romajuanmanuel"
  );

  card.append(title, cardText, cardIcons);
  return card;
}

function createCardIcons(linkedInUrl, githubUrl) {
  const container = document.createElement("div");
  container.className = "card-icons";

  const linkedInLink = document.createElement("a");
  linkedInLink.href = linkedInUrl;
  linkedInLink.target = "_blank";
  linkedInLink.rel = "noopener noreferrer";

  const linkedInIcon = document.createElement("i");
  linkedInIcon.className = "devicon-linkedin-plain icon-style";
  linkedInLink.appendChild(linkedInIcon);
  container.appendChild(linkedInLink);

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
