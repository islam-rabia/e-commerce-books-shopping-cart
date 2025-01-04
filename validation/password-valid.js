let password = document.querySelector(".formOne .password input");
let textPass = document.querySelector(".formOne .password .text");
let paragraphPassword = document.querySelector(".formOne .password p");
let iconErrorPass = document.querySelector(".formOne .password .text .error");
let iconTruePass = document.querySelector(".formOne .password .text .true");
let iconUserPassword = document.querySelector(".formOne .icons");

let PasswordFuncInt = function () {
  let getLocalStorage = JSON.parse(localStorage.getItem("SignData"));

  if (password.value !== getLocalStorage.password) {
    password.classList.add("false");
    password.classList.remove("true");
    paragraphPassword.innerHTML = "Password address cant be blank";
    paragraphPassword.style.color = "red";
    textPass.classList.add("active");
    iconErrorPass.style.color = "red";
    iconTruePass.style.display = "none";
    iconErrorPass.style.display = "block";
    iconUserPassword.style.top = "33%";
  } else {
    password.classList.remove("false");
    password.classList.add("true");
    paragraphPassword.innerHTML = "Password success validation";
    paragraphPassword.style.color = "#38ad3c";
    textPass.classList.add("active");
    iconTruePass.style.color = "#38ad3c";
    iconTruePass.style.display = "block";
    iconErrorPass.style.display = "none";
    iconUserPassword.style.top = "33%";
  }
};

let KeyUpFuncPassword = function () {
  password.addEventListener("keyup", function () {
    PasswordFuncInt();
    if (password.value == "") {
      password.classList.remove("false");
      password.classList.remove("true");
      textPass.classList.remove("active");
      iconUserPassword.style.top = "50%";
    }
  });
};

export { KeyUpFuncPassword, PasswordFuncInt };
