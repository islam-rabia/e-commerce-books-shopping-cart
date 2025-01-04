var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { draggingSlider } from "./dragging-slider.js";
import { saveToLocalStorage } from "./saveToLocalStorage.js";
import { saveButtonClick } from "./save-click-buttons.js";
import { activeLiveProduct } from "./active-live-product.js";
let lovedData;
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch("data/data-feature-books.json");
        let myData = yield result.json();
        let sliceData = myData.slice(5);
        lovedData = sliceData;
        generateDataBookOne(sliceData);
        saveButtonClick();
        activeLiveProduct();
        let listBooksOne = document.querySelector(".books-list-two");
        draggingSlider(listBooksOne);
    });
}
window.addEventListener("DOMContentLoaded", () => {
    fetchData();
});
let listBooksOne = document.querySelector(".books-list-two");
function generateDataBookOne(data) {
    listBooksOne.innerHTML = data
        .map((item, index) => {
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
    listBooksOne.addEventListener("click", (e) => {
        let element = e.target.closest(".love-icon");
        if (element) {
            let index = element.dataset.ind;
            if (localStorage.getItem("SignData")) {
                saveToLocalStorage(lovedData, index);
            }
            else {
                location.href = "signUp.html";
            }
        }
    });
}
