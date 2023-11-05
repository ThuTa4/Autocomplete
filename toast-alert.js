const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertTag = document.createElement("div");
  toastAlertTag.append("Your file was successfully uploaded.");
  toastAlertTag.classList.add("toastAlert");
  parentTag.append(toastAlertTag);
  toastAlertTag.style.top = `-${toastAlertTag.offsetHeight}px`;
  setTimeout(() => {
    toastAlertTag.style.top = `0px`;
  }, 100);
  setTimeout(() => {
    toastAlertTag.style.top = `-${toastAlertTag.offsetHeight}px`;
  }, 2000);
};
buttonTag.addEventListener("click", () => {
  openToastAlert();
});
