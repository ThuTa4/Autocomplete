const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertTag = document.createElement("div");
  toastAlertTag.append("Your file was successfully uploaded.");
  toastAlertTag.classList.add("toastAlert");
  parentTag.append(toastAlertTag);
};
buttonTag.addEventListener("click", () => {
  openToastAlert();
});
