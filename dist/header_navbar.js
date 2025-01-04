let headerFunc = function () {
    let buttonOpen = document.querySelector(".btn-open");
    let buttonClose = document.querySelector(".btn-close");
    let navbar = document.querySelector(".navbar");
    let navbarDiv = document.querySelector(".navbar-div");
    let navbarList = document.querySelectorAll(".navbar-list li");
    let icons = document.querySelectorAll(".icons div");
    let myFunc = function () {
        buttonOpen.addEventListener("click", function () {
            navbar.classList.add("active");
            navbarDiv.classList.add("active");
        });
        buttonClose.addEventListener("click", function () {
            navbar.classList.remove("active");
            navbarDiv.classList.remove("active");
        });
        navbarDiv.addEventListener("click", function () {
            navbar.classList.remove("active");
            navbarDiv.classList.remove("active");
        });
        for (let i of navbarList) {
            i.addEventListener("click", function () {
                navbar.classList.remove("active");
                navbarDiv.classList.remove("active");
            });
        }
        for (let y of icons) {
            y.addEventListener("click", function () {
                navbar.classList.remove("active");
                navbarDiv.classList.remove("active");
            });
        }
    };
    myFunc();
};
export { headerFunc };
