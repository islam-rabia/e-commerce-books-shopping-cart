let UserLastInput = document.querySelector(".last input");
let paragraphLast = document.querySelector(".last p");
let textLast = document.querySelector(".last .text");
let iconErrorLast = document.querySelector(".last .text .error");
let iconTrueLast = document.querySelector(".last .text .true");

let UserLast = function () {
  let UserLastValid = /[a-zA-Z]{5,}/gi;
  if (!UserLastInput.value.match(UserLastValid)) {
    UserLastInput.classList.add("false");
    UserLastInput.classList.remove("true");
    textLast.classList.add("active");
    paragraphLast.innerHTML = "name cant blank";
    paragraphLast.style.color = "red";
    iconErrorLast.style.color = "red";
    iconTrueLast.style.display = "none";
    iconErrorLast.style.display = "block";
  } else {
    UserLastInput.classList.remove("false");
    UserLastInput.classList.add("true");
    textLast.classList.add("active");
    paragraphLast.innerHTML = "Name validation";
    paragraphLast.style.color = "#38ad3c";
    iconTrueLast.style.color = "#38ad3c";
    iconTrueLast.style.display = "block";
    iconErrorLast.style.display = "none";
  }
};

let KeyUpFuncLast = function () {
  UserLastInput.addEventListener("keyup", function () {
    UserLast();
    if (UserLastInput.value == "") {
      UserLastInput.classList.remove("false");
      UserLastInput.classList.remove("true");
      textLast.classList.remove("active");
    }

    let getData = JSON.parse(localStorage.getItem("SignData"));

    localStorage.setItem(
      "SignData",
      JSON.stringify({ ...getData, LastUser: UserLastInput.value })
    );
  });
};

export { KeyUpFuncLast, UserLast };
