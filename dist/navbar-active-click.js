function navbarActive() {
    let navbarLinks = document.querySelectorAll(".navbar-list li a");
    navbarLinks.forEach((btn) => {
        btn.addEventListener("click", () => {
            navbarLinks.forEach((btn) => {
                btn.classList.remove("activeBtn");
            });
            btn.classList.add("activeBtn");
        });
    });
}
export { navbarActive };
