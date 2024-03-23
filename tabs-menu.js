const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const imageTag = document.querySelector(".backgroundImage");

const src1 = [
  "./1161810.jpg",
  "./Wallpapers.jpg",
  "./1567937037.jpg",
  "./1500x844.jpg",
  "./wp5677730.jpg",
];

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTagChange = (event) => {
  const clickedTagId = event.target.id;
  const clickedLiTag = document.getElementById(clickedTagId);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagoffsetleft = clickedLiTag.offsetLeft;
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagoffsetleft}px)`;
  console.log(imageTag);
  const imageTagSrc = event.target.src;
  const imageTagTag = document.getElementById(imageTagSrc);
  imageTag.add(imageTagTag);
};

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  const imageTagContainer = document.createElement("img");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleTagChange);
  ulTag.append(liTag);
  imageTagContainer.append(src1[i]);
  imageTagContainer.src = i;
  imageTag.append(imageTagContainer);
  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
