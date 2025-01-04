import { saveDataInLocalStorage } from "../dist/save-data-localStorage.js";
import { removeProduct, removeLovedIcon } from "./remove-product.js";
import { handleMessageSuccess } from "./handle-sues.js";

let wishContainer;
function getLovedProducts() {
  let getData = JSON.parse(localStorage.getItem("wishListLoveData")) || [];
  if (getData) {
    handleData(getData);
    wishContainer = getData;
  }
}

let app = document.querySelector(".featured-books-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
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
          <div class="icon-div">
            <div class="remove-icon" data-ion="${index}" data-ind="${id}">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
      </div>
    </li>
    `;
    })
    .join("");

  let btnCart = document.querySelectorAll(".remove-icon");

  btnCart.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("data-ion"));
      let indexIcon = Number(btn.getAttribute("data-ind"));
      removeProduct(wishContainer, index);
      removeLovedIcon(indexIcon);
    });
  });

  let btnFeature = document.querySelectorAll(".feature-btn");

  btnFeature.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("data-ion"));
      saveDataInLocalStorage(wishContainer, index);
      handleMessageSuccess(index);
    });
  });
}

export { getLovedProducts, handleData };
