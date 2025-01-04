import { handleMessageSuccess } from "./handle-cart.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";

let dataCart: any;
let dataIndex: any;
async function generateData() {
  let result = await fetch("data/data-feature-books.json");
  let data = await result.json();
  dataCart = data;
  data.map((index: any) => (dataIndex = index));
}

window.addEventListener("DOMContentLoaded", () => {
  generateData();
});

function addToCart() {
  let btnAddCart = document.querySelectorAll(".showed .feature-btn");

  btnAddCart.forEach((btn) => {
    btn.addEventListener("click", () => {
      let dataset = Number(btn.getAttribute("data-ion"));

      if (localStorage.getItem("SignData")) {
        handleMessageSuccess(dataset);
        saveDataInLocalStorage(dataCart, dataset);
      } else {
        location.href = "signUp.html";
      }
    });
  });
}

export { addToCart };
