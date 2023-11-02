const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const divTag = document.querySelector(".menu");
const menuTag = document.querySelector(".backgroundImage");

const src1 = [
  "./wp5677730.jpg",
  "./Wallpapers.jpg",
  "./1567937037.jpg",
  "./1500x844.jpg",
];

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTagChange = (event) => {
  const clickedTagId = event.target.id;
  const clickedLiTag = document.getElementById(clickedTagId);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagoffsetleft = clickedLiTag.offsetLeft;
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagoffsetleft}px)`;
  divTag.remove("menuTag.src");
  if (menuTag === src1.length) {
  }
};
for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");

  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleTagChange);
  ulTag.append(liTag);
  if (i + 1 < src1.length) {
    menuTag.src = src1[i];
    divTag.append(menuTag);
  }

  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
