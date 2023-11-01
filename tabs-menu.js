const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "services", "about us", "contact us", "login"];

for (let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  ulTag.append(liTag);
}
