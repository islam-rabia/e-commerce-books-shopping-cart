import { ModeFunction } from "../dist/Dark_Light.js";
import { handleNavbar, iconOutFunc } from "../dist/handle-header.js";
import { getCountProductInCart } from "./get-data-inLocalStorage.js";
import { getDataInLocalStorage } from "./handle-data.js";
import { headerFunc } from "../dist/header_navbar.js";
import "../dist/scroll-header.js";

function accountFunc() {
  let account = document.querySelector(".account h3");
  let getLocalStorage = JSON.parse(localStorage.getItem("SignData") || "");

  account.innerHTML = `Welcome ${
    getLocalStorage.FirstUser ? getLocalStorage.FirstUser : "Guest"
  } ${getLocalStorage.LastUser ? getLocalStorage.LastUser : ""}`;
}

let counter = document.querySelector(".counter");
let counterNumber = document.querySelector(".counter p");

let local = JSON.parse(localStorage.getItem("wishListDataArray")) || [];
if (local.length === 0) {
  counter.classList.remove("active");
} else {
  const wishListData =
    JSON.parse(localStorage.getItem("wishListDataArray")) || [];
  counterNumber.innerHTML = wishListData.length;
  counter.classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  getDataInLocalStorage();
});

accountFunc();
ModeFunction();
handleNavbar();
iconOutFunc();
getCountProductInCart();
headerFunc();

let isActive = JSON.parse(localStorage.getItem("wishListLoveData")) || [];
let liveIcon = document.querySelector(".live");

if (isActive.length > 0) {
  liveIcon.classList.add("active");
} else {
  liveIcon.classList.remove("active");
}
