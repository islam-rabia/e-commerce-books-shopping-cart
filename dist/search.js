let searchFunc = function () {
    let mainOne = document.querySelector(".main-one");
    let mainOneClose = document.querySelector(".main-one .btn-close");
    let mainOneOpen = document.querySelector(".search");
    let inputSearch = document.querySelector(".search-div");
    let SearchFunc = function () {
        if (mainOneOpen) {
            mainOneOpen.addEventListener("click", function () {
                mainOne.classList.add("active");
                inputSearch.classList.add("active");
            });
        }
        if (mainOneClose) {
            mainOneClose.addEventListener("click", function () {
                mainOne.classList.remove("active");
                inputSearch.classList.remove("active");
            });
        }
    };
    SearchFunc();
};
export { searchFunc };
