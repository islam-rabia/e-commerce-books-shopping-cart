function handleNavbar() {
  let iconSign = document.querySelector(".person") as HTMLElement;
  let iconNav = document.querySelector(".icons") as HTMLElement;

  let local = { ...localStorage };

  if (Object.keys(local).length !== 0) {
    iconSign.remove();
    iconNav.classList.add("active");
  }
}

function iconOutFunc() {
  let iconOut = document.querySelector(".icon-out") as HTMLElement;

  iconOut.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => {
      location.href = "signUp.html";
    }, 1500);
  });
}

export { handleNavbar, iconOutFunc };
