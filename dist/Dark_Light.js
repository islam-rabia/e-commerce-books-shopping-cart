let ModeFunction = function () {
    let root = document.querySelector(":root");
    let mode = document.querySelector(".icon-btn");
    let icon = document.querySelector(".icon-btn ion-icon");
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
