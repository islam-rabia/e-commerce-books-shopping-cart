var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { handleMessageSuccess } from "./handle-cart.js";
import { saveDataInLocalStorage } from "./save-data-localStorage.js";
let dataCart;
let dataIndex;
function generateData() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch("data/data-feature-books.json");
        let data = yield result.json();
        dataCart = data;
        data.map((index) => (dataIndex = index));
    });
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
            }
            else {
                location.href = "signUp.html";
            }
        });
    });
}
export { addToCart };
