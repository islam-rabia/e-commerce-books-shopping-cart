let searchFunc = function (): void {
  let mainOne = document.querySelector(".main-one") as HTMLElement;
  let mainOneClose = document.querySelector(".main-one .btn-close") as HTMLElement;
  let mainOneOpen = document.querySelector(".search") as HTMLElement;
  let inputSearch = document.querySelector(".search-div") as HTMLElement;

  let SearchFunc = function (): void {
    if (mainOneOpen) {
      mainOneOpen.addEventListener("click", function (): void {
        mainOne.classList.add("active");
        inputSearch.classList.add("active");
      });
    }

    if (mainOneClose) {
      mainOneClose.addEventListener("click", function (): void {
        mainOne.classList.remove("active");
        inputSearch.classList.remove("active");
      });
    }
  }

  SearchFunc();
}

export { searchFunc };