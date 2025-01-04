function activeLiveProduct() {
  let buttons = document.querySelectorAll(
    ".love-icon"
  ) as NodeListOf<HTMLButtonElement>;
  let liveIcon = document.querySelector(".live") as HTMLElement;
  let isActive = JSON.parse(
    localStorage.getItem("wishListLoveData") || "false"
  );

  buttons.forEach((btn) => {
    if (isActive.length > 0) {
      liveIcon.classList.add("active");
    }

    btn.addEventListener("click", () => {
      isActive = true;
      liveIcon.classList.toggle("active", isActive);

      if (localStorage.getItem("SignData")) {
        localStorage.setItem("liveActive", JSON.stringify(isActive));
      } else {
        location.href = "signUp.html";
      }
    });
  });
}

export { activeLiveProduct };
