import { ModeFunction } from "./Dark_Light.js";
import { handleNavbar, iconOutFunc } from "./handle-header.js";
import "./generate-slider-books-two.js";
import "./feature-books.js";
import "./scroll-header.js";
import "./generate-slider-books-one.js";
import { generateData } from "./customer-handle.js";
import { navbarActive } from "./navbar-active-click.js";

ModeFunction();

const promises = Promise.all([import("./header_navbar.js")]);

promises.then(function (result) {
  result[0].headerFunc();
});

import { searchFunc } from "./search.js";
searchFunc();

handleNavbar();
iconOutFunc();

function accountFunc() {
  let account = document.querySelector(".account h3") as HTMLElement;
  let getLocalStorage = JSON.parse(localStorage.getItem("SignData") || "{}");

  if (localStorage.getItem("SignData")) {
    account.innerHTML = `Welcome ${
      getLocalStorage.FirstUser ? getLocalStorage.FirstUser : "Guest"
    } ${getLocalStorage.LastUser ? getLocalStorage.LastUser : ""}`;
  }
}

accountFunc();

window.addEventListener("DOMContentLoaded", () => {
  generateData();
});

navbarActive();
