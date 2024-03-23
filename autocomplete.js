const autoCompleteInputTag =
  document.getElementsByClassName("autoCompleteInput")[0];
let products;

const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    const responseData = response.json();
    return responseData;
  })
  .then((productDataFromServer) => {
    products = productDataFromServer;
    autoCompleteInputTag.disabled = false;
  })
  .catch((error) => {
    console.log("Inside catch: ", error);
  });

const resultTagComtainer =
  document.getElementsByClassName("resultContainer")[0];

const enteredTag = document.getElementsByClassName("enteredTag")[0];

let filteredProducts = [];

autoCompleteInputTag.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowUp" ||
    event.key === "Enter"
  ) {
    navigateAndSelectProduct(event.key);
    return;
  }
  resultTagComtainer.innerHTML = "";
  const searchText = event.target.value.toLowerCase();

  if (searchText.length === 0) {
    return;
  }
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchText);
  });
  
  const hasProductsToShow = filteredProducts.length > 0;
  if (hasProductsToShow) {
    for (let i = 0; i < filteredProducts.length; i++) {
      const productItemComtainer = document.createElement("div");
      productItemComtainer.id = filteredProducts[i].id;
      productItemComtainer.classList.add("productItemComtainer");

      const productName = document.createElement("div");
      productName.classList.add("productName");
      productName.append(filteredProducts[i].title);

      const productImage = document.createElement("img");
      productImage.classList.add("productImage");
      productImage.src = filteredProducts[i].image;

      productItemComtainer.append(productName, productImage);
      resultTagComtainer.append(productItemComtainer);
    }
  }
});

const entering = () => {
  const enteredProduct = selectProduct(indexToSelect);
  const enteredProductTag = enteredProduct;
  enteredTag.append(enteredProductTag);
  enteredProductTag.style.height = "200px";
  enteredProductTag.style.marginTop = "40px";
  enteredProductTag.style.backgroundColor = "#fff";
  enteredProductTag.firstChild.style.color = "black";
  resultTagComtainer.remove(autoCompleteInputTag);
};

let indexToSelect = -1;
const navigateAndSelectProduct = (key) => {
  if (key === "ArrowDown") {
    if (indexToSelect === filteredProducts.length - 1) {
      indexToSelect = -1;
      deselectProduct();
      return;
    }
    indexToSelect++;
    const producItemComtainerToSelect = selectProduct(indexToSelect);
    if (indexToSelect > 0) {
      deselectProduct();
    }
    producItemComtainerToSelect.classList.add("selected");
  } else if (key === "ArrowUp") {
    if (indexToSelect === -1) {
      return;
    }
    if (indexToSelect === 0) {
      deselectProduct();
      indexToSelect = -1;
      return;
    }
    indexToSelect--;
    deselectProduct();
    const producItemComtainerToSelect = selectProduct(indexToSelect);
    producItemComtainerToSelect.classList.add("selected");
  } else {
    entering();
  }
};

const selectProduct = (index) => {
  const productIdToDeselect = filteredProducts[index].id.toString();
  const producItemComtainerToSelect =
    document.getElementById(productIdToDeselect);
  producItemComtainerToSelect.style.backgroundColor = "#237BFF";
  producItemComtainerToSelect.firstChild.style.color = "#fff";
  return producItemComtainerToSelect;
};

const deselectProduct = () => {
  const productToDeselect = document.getElementsByClassName("selected")[0];
  productToDeselect.style.backgroundColor = "#fff";
  productToDeselect.firstChild.style.color = "black";
  productToDeselect.classList.remove("selected");
};
