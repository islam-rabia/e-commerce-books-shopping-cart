function addCounterLengthProduct() {
  let titleProduct = document.querySelector(".title-product h3");
  let dataLoved = JSON.parse(localStorage.getItem("wishListLoveData"));

  if (dataLoved) {
    titleProduct.innerHTML = `my Loved (${dataLoved.length})`;
  }
}

export { addCounterLengthProduct };
