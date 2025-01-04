function getCountProductInCart() {
  let span = document.querySelector(".title-cart span");

  if (localStorage.getItem("wishListDataArray")) {
    let product = JSON.parse(localStorage.getItem("wishListDataArray"));
    span.innerHTML = `(${product.length})`;
  } else {
    span.innerHTML = `(0)`;
  }
}

export { getCountProductInCart };
