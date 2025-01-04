import { handleData } from "./get-loved-product.js";
import { addCounterLengthProduct } from "./change-length-loved.js";
import { saveButtonClick } from "../dist/save-click-buttons.js";
import { handleMessageError } from "./handle-error.js";

function removeProduct(wishContainer, index) {
  wishContainer.splice(index, 1);
  localStorage.setItem("wishListLoveData", JSON.stringify(wishContainer));
  handleData(wishContainer);

  let isActive = JSON.parse(localStorage.getItem("wishListLoveData"));
  let liveIcon = document.querySelector(".live");

  if (isActive.length > 0) {
    liveIcon.classList.add("active");
  } else {
    liveIcon.classList.remove("active");
  }

  addCounterLengthProduct();
  handleMessageError(index);
}

function removeLovedIcon(index) {
  let RemovedBtn = JSON.parse(localStorage.getItem("saveButtonClick") || "[]");
  if (RemovedBtn.length > 0) {
    RemovedBtn = RemovedBtn.filter((el) => el !== String(index));
    saveButtonClick();
    localStorage.setItem("saveButtonClick", JSON.stringify(RemovedBtn));
  }
}

export { removeProduct, removeLovedIcon };
