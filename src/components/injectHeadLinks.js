export function injectHeadLinks() {
  const deviconLink = document.createElement("link");
  deviconLink.rel = "stylesheet";
  deviconLink.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
  document.head.appendChild(deviconLink);

  const materialIconsLink = document.createElement("link");
  materialIconsLink.rel = "stylesheet";
  materialIconsLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
  document.head.appendChild(materialIconsLink);
}
