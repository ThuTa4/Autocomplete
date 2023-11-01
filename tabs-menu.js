const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "services", "about us", "contact us", "login"];

const handleTagChange = (event) => {
  console.log(event.target.id);
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
