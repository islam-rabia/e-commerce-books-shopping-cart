function handleNavbar() {
    let iconSign = document.querySelector(".person");
    let iconNav = document.querySelector(".icons");
    let local = Object.assign({}, localStorage);
    if (Object.keys(local).length !== 0) {
        iconSign.remove();
        iconNav.classList.add("active");
    }
}
function iconOutFunc() {
    let iconOut = document.querySelector(".icon-out");
    iconOut.addEventListener("click", () => {
        localStorage.clear();
        setTimeout(() => {
            location.href = "signUp.html";
        }, 1500);
    });
}
export { handleNavbar, iconOutFunc };
