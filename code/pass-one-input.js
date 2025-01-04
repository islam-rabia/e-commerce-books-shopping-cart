let password = document.querySelector(".formTwo .password input");
let textPass = document.querySelector(".formTwo .password .text");
let paragraphPassword = document.querySelector(".formTwo .password p");
let iconErrorPass = document.querySelector(".formTwo .password .text .error");
let iconTruePass = document.querySelector(".formTwo .password .text .true");
let iconUserPassword = document.querySelector(".formTwo .icons");

let PasswordFuncInt = function () {
  let passwordRegular = /^\d{6,}[^a-zA-Z]/gi;
  if (!password.value.match(passwordRegular)) {
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

    let getData = JSON.parse(localStorage.getItem("SignData"));

    localStorage.setItem(
      "SignData",
      JSON.stringify({ ...getData, password: password.value })
    );
  });
};

export { KeyUpFuncPassword, PasswordFuncInt };
