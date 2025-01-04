function orderCart() {
  let orderCard = document.querySelector(".sub-total span");
  let shipping = document.querySelector(".shipping span");
  let sales = document.querySelector(".sales span");
  let total = document.querySelector(".total span");
  let allData = JSON.parse(localStorage.getItem("wishListDataArray"));
  let local = JSON.parse(localStorage.getItem("wishListDataArray")) || [];

  let sub = 0;
  allData.map((el) => {
    let subTotal = el.quantity * el.price;
    sub += subTotal;
  });
  orderCard.innerHTML = `${sub.toFixed(2)}`;

  if (local.length === 0) {
    total.innerHTML = 0;
    orderCard.innerHTML = 0;
  } else {
    total.innerHTML = +Number(
      Number(orderCard.innerHTML) +
        Number(shipping.innerHTML) -
        Number(sales.innerHTML)
    ).toFixed(2);
  }
}

export { orderCart };
