"use strict";
let header = document.querySelector("header");
let buttonTop = document.querySelector(".button-top .btn");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header === null || header === void 0 ? void 0 : header.classList.add("active");
        buttonTop === null || buttonTop === void 0 ? void 0 : buttonTop.classList.add("active");
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove("active");
        buttonTop === null || buttonTop === void 0 ? void 0 : buttonTop.classList.remove("active");
    }
});
buttonTop === null || buttonTop === void 0 ? void 0 : buttonTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
