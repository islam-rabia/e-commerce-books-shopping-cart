import { draggingSlider } from "./dragging-slider.js";
import { activeLiveProduct } from "./active-live-product.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";

let lovedData: any;
async function fetchData() {
  let result = await fetch("data/data-feature-books.json");
  let myData = await result.json();

  let sliceData = myData.slice(0, 5);
  lovedData = sliceData;

  generateDataBookOne(sliceData);
  activeLiveProduct();

  let listBooksOne = document.querySelector(".books-list") as HTMLElement;
  draggingSlider(listBooksOne);
}

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

let listBooksOne = document.querySelector(".books-list") as HTMLElement;

function generateDataBookOne(data: object[]) {
  listBooksOne.innerHTML = data
    .map((item: any, index: any) => {
      let { id, img, title } = item;

      return `
      <li class="${id}">
        <div class="love-icon" data-ion="${id}" data-ind="${index}">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <figure class="book-image">
          <img src="${img}" draggable="false" alt="" />
        </figure>
        <div class="book-title">
          <h1>${title}</h1>
          <p>$7.99 <del>$14.99</del></p>
          <ul class="icons-book-list">
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-half-outline"></ion-icon></li>
          </ul>
        </div>
      </li>
    `;
    })
    .join("");

  listBooksOne.addEventListener("click", (e: any) => {
    let element: any = e.target.closest(".love-icon");

    if (element) {
      let index = element.dataset.ind;

      if (localStorage.getItem("SignData")) {
        saveToLocalStorage(lovedData, index);
      } else {
        location.href = "signUp.html";
      }
    }
  });
}
