let UserFirstInput = document.querySelector(".first input");
let paragraphFirst = document.querySelector(".first p");
let textFirst = document.querySelector(".first .text");
let iconErrorFirst = document.querySelector(".first .text .error");
let iconTrueFirst = document.querySelector(".first .text .true");

let UserFirst = function () {
  let UserFirstValid = /[a-zA-Z]{5,}/gi;
  if (!UserFirstInput.value.match(UserFirstValid)) {
    UserFirstInput.classList.add("false");
    UserFirstInput.classList.remove("true");
    textFirst.classList.add("active");
    paragraphFirst.innerHTML = "name cant blank";
    paragraphFirst.style.color = "red";
    iconErrorFirst.style.color = "red";
    iconTrueFirst.style.display = "none";
    iconErrorFirst.style.display = "block";
  } else {
    UserFirstInput.classList.remove("false");
    UserFirstInput.classList.add("true");
    textFirst.classList.add("active");
    paragraphFirst.innerHTML = "Name validation";
    paragraphFirst.style.color = "#38ad3c";
    iconTrueFirst.style.color = "#38ad3c";
    iconTrueFirst.style.display = "block";
    iconErrorFirst.style.display = "none";
  }
};

let KeyUpFunc = function () {
  UserFirstInput.addEventListener("keyup", () => {
    UserFirst();
    if (UserFirstInput.value == "") {
      textFirst.classList.remove("active");
      UserFirstInput.classList.remove("false");
      UserFirstInput.classList.remove("true");
    }

    let getData = JSON.parse(localStorage.getItem("SignData"));

    localStorage.setItem(
      "SignData",
      JSON.stringify({ ...getData, FirstUser: UserFirstInput.value })
    );
  });
};

export { UserFirst, KeyUpFunc };
