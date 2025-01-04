let header = document.querySelector("header");
let buttonTop = document.querySelector(".button-top .btn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header?.classList.add("active");
    buttonTop?.classList.add("active");
  } else {
    header?.classList.remove("active");
    buttonTop?.classList.remove("active");
  }
});

buttonTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
