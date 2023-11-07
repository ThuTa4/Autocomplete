const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainer");
  const toastAlertTextTag = document.createElement("div");
  toastAlertTextTag.append(
    `We use cookies . Your continued use of our site implies you agree to this. See details.`
  );
  toastAlertTextTag.classList.add("toastAlertText");

  const closeButtonTag = document.createElement("div");
  closeButtonTag.append("Close");
  closeButtonTag.classList.add("btn", "btn-light");

  toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag);

  parentTag.append(toastAlertContainerTag);
  parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  setTimeout(() => {
    parentTag.style.bottom = `0px`;
  }, 100);

  closeButtonTag.addEventListener("click", () => {
    localStorage.setItem("accepted", "1");
    parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  });
};

window.addEventListener("load", () => {
  const accepted = localStorage.getItem("accepted"); // "1"
  if (accepted !== "1") {
    openToastAlert();
  }
});
