import { addDataInShowProduct } from "./show-product.js";
import { handleMessageSuccess } from "./handle-cart.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";

let wishContainer: any;
function generateData() {
  let result = new XMLHttpRequest();
  result.open("GET", "data/data-feature-books.json");
  result.responseType = "json";
  result.send();

  result.onload = () => {
    handleData(result.response);
    wishContainer = result.response;
  };
}

window.addEventListener("DOMContentLoaded", () => {
  generateData();
});

const app = document.querySelector(".featured-books-list") as HTMLElement;

function handleData(data: object[]) {
  app.innerHTML = data
    .map((item: any, index: any) => {
      let { id, title, img, price, disbound } = item;
      return `
        <li class="product-${id}">
          <div class="featured-book">
            <figure class="figure-img">
              <img src="${img}" alt="" />
            </figure>

            <div class="feature-title">
              <h3>${title}</h3>
              <p>
                Price: ${price}$<span><del>${disbound}$</del></span>
              </p>
            </div>
            <button class="feature-btn" data-ion="${index}">Add To Cart</button>
          </div>
          <div class="icon-div">
            <div class="cart-icon" data-ion="${index}">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <div class="show-icon" data-ion="${index}">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <div class="search-icon">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
        </li>
    `;
    })
    .join("");

  app.addEventListener("click", (event: any) => {
    let divShow = event.target.closest(".show-icon");
    let divCart = event.target.closest(".cart-icon");
    let btnCart = event.target.closest(".feature-btn");

    if (divShow) {
      let index = divShow.dataset.ion;
      addDataInShowProduct(wishContainer, index);
    }

    if (divCart) {
      let index = divCart.dataset.ion;
      if (localStorage.getItem("SignData")) {
        handleMessageSuccess(index);
        saveDataInLocalStorage(wishContainer, index);
      } else {
        location.href = "signUp.html";
      }
    }

    if (btnCart) {
      let index = btnCart.dataset.ion;
      if (localStorage.getItem("SignData")) {
        handleMessageSuccess(index);
        saveDataInLocalStorage(wishContainer, index);
      } else {
        location.href = "signUp.html";
      }
    }
  });
}
