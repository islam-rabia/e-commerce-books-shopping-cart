import { ModeFunction } from "../dist/Dark_Light.js";
import { handleNavbar, iconOutFunc } from "../dist/handle-header.js";
import { getLovedProducts } from "./get-loved-product.js";
import { addCounterLengthProduct } from "./change-length-loved.js";
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

const promises = Promise.all([import("../dist/header_navbar.js")]);

promises.then(function (result) {
  result[0].headerFunc();
});

accountFunc();
ModeFunction();
handleNavbar();
iconOutFunc();
getLovedProducts();

let isActive = JSON.parse(localStorage.getItem("wishListLoveData")) || {};
let liveIcon = document.querySelector(".live");

if (isActive.length > 0) {
  liveIcon.classList.add("active");
} else {
  liveIcon.classList.remove("active");
}

addCounterLengthProduct();

let para = document.querySelector("#featured-books p");

// Check if wishListLoveData exists and is an array
let wishListLoveData =
  JSON.parse(localStorage.getItem("wishListLoveData")) || [];
if (Array.isArray(wishListLoveData) && wishListLoveData.length <= 0) {
  para.classList.remove("active");
} else {
  para.classList.add("active");
}
// para.classList.add("active");

// console.log();
