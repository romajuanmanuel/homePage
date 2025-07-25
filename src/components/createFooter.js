import headerPhoto from "../assets/headerPhoto.jpg";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "footer";

  const leftFooter = document.createElement("div");
  leftFooter.className = "left-footer";

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Me";

  const p = document.createElement("p");
  p.textContent = "Feel free to reach out via email at: romajuanmanuel@gmail.com";

  leftFooter.append(h1, p);

  const rightFooter = document.createElement("div");
  rightFooter.className = "right-footer";

  const img = document.createElement("img");
  img.src = headerPhoto;
  img.alt = "Contact Image";
  img.className = "footer-image";

  rightFooter.appendChild(img);
  footer.append(leftFooter, rightFooter);
  return footer;
}
