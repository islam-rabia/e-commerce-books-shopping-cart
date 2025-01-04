import { handleMessageSuccess } from "./handle-cart.js";
import { orderCart } from "./order-cart.js";

let dataList;
function getDataInLocalStorage() {
  if (localStorage.getItem("wishListDataArray")) {
    let data = JSON.parse(localStorage.getItem("wishListDataArray"));
    handleData(data);
    dataList = data;
    orderCart();
  }
}

let app = document.querySelector(".product-cart-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, disbound, quantity } = item;

      return `
      <li class="product-${id}">
      <figure>
        <img src="${img}" alt="" />
      </figure>
      <div class="product-title">
        <h3>${title}</h3>
        <p>
          Price: ${price}$<span><del>${disbound}$</del></span>
        </p>
        <div class="quantity">
          <span>Quantity: </span>
          <input type="text" value="${quantity}" />
        </div>
      </div>
      <button btn-ion="${index}" class="close-product">
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </li>
  `;
    })
    .join("");

  let closeProduct = document.querySelectorAll(".close-product");
  closeProduct.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("btn-ion"));
      removeDataInLocalStorage(index);
      handleMessageSuccess(index);
      orderCart();
    });
  });
}

function removeDataInLocalStorage(index) {
  dataList.splice(index, 1);
  localStorage.setItem("wishListDataArray", JSON.stringify(dataList));
  handleData(dataList);

  let counter = document.querySelector(".counter");
  let counterNumber = document.querySelector(".counter p");

  let local = JSON.parse(localStorage.getItem("wishListDataArray")) || [];
  if (local.length === 0) {
    counter.classList.remove("active");
  } else {
    const wishListData =
      JSON.parse(localStorage.getItem("wishListDataArray")) || [];
    counterNumber.innerHTML = wishListData.length;
  }

  let cartTitle = document.querySelector(".title-cart h3 span");
  cartTitle.innerHTML = `(${dataList.length})`;
}

export { getDataInLocalStorage };
