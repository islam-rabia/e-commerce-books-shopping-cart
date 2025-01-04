let ModeFunction = function (): void {
  let root = document.querySelector(":root") as HTMLElement;
  let mode = document.querySelector(".icon-btn") as HTMLElement;
  let icon = document.querySelector(".icon-btn ion-icon") as HTMLElement;
  let isActive = JSON.parse(localStorage.getItem("mode") || "false");

  icon.setAttribute("name", isActive ? "sunny-outline" : "moon-outline");
  if (isActive) {
    root.classList.add("active");
  }

  mode.addEventListener("click", () => {
    isActive = !isActive;
    icon.setAttribute("name", isActive ? "sunny-outline" : "moon-outline");
    root.classList.toggle("active", isActive);

    localStorage.setItem("mode", JSON.stringify(isActive));
  });
};

export { ModeFunction };
