import headerPhoto from "../assets/headerPhoto.jpg";

export function createHeader() {
  const header = document.createElement("header");
  header.id = "header";

  const wrapper = document.createElement("div");
  wrapper.className = "scene-wrapper";
  wrapper.setAttribute("tabindex", "0");

  const scene1 = document.createElement("div");
  scene1.className = "scene scene-1";
  scene1.style.backgroundImage = `url(${headerPhoto})`;

  const scene2 = document.createElement("div");
  scene2.className = "scene scene-2";
  const titleOverlay = document.createElement("h2");
  titleOverlay.className = "scene-title";
  titleOverlay.textContent = "Juan Roma";
  scene2.appendChild(titleOverlay);

  wrapper.append(scene1, scene2);
  header.appendChild(wrapper);


  return header;
}
