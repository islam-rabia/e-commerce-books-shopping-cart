let headerFunc = function () {
  let buttonOpen = document.querySelector(".btn-open") as HTMLElement;
  let buttonClose = document.querySelector(".btn-close") as HTMLElement;
  let navbar = document.querySelector(".navbar") as HTMLElement;
  let navbarDiv = document.querySelector(".navbar-div") as HTMLElement;

  let navbarList = document.querySelectorAll(".navbar-list li");
  let icons = document.querySelectorAll(".icons div");

  let myFunc = function (): void {
    buttonOpen.addEventListener("click", function (): void {
      navbar.classList.add("active");
      navbarDiv.classList.add("active");
    });

    buttonClose.addEventListener("click", function (): void {
      navbar.classList.remove("active");
      navbarDiv.classList.remove("active");
    });

    navbarDiv.addEventListener("click", function (): void {
      navbar.classList.remove("active");
      navbarDiv.classList.remove("active");
    });

    for (let i of navbarList) {
      i.addEventListener("click", function (): void {
        navbar.classList.remove("active");
        navbarDiv.classList.remove("active");
      });
    }

    for (let y of icons) {
      y.addEventListener("click", function (): void {
        navbar.classList.remove("active");
        navbarDiv.classList.remove("active");
      });
    }
  };

  myFunc();
};

export { headerFunc };
