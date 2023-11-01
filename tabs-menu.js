const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const divTag = document.querySelector("menu");

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTagChange = (event) => {
  const clickedTagId = event.target.id;
  const clickedLiTag = document.getElementById(clickedTagId);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagoffsetleft = clickedLiTag.offsetLeft;
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagoffsetleft}px)`;
};
for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");

  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleTagChange);
  ulTag.append(liTag);
  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
