let paragraphEmail = document.querySelector(".formOne .Email p");
let iconErrorEmail = document.querySelector(".formOne .Email .text .error");
let iconTrueEmail = document.querySelector(".formOne .Email .text .true");
let emailInput = document.querySelector(".formOne .Email input");
let textEmail = document.querySelector(".formOne .Email .text");

let EmailFuncInt = function () {
  let getLocalStorage = JSON.parse(localStorage.getItem("SignData"));

  if (emailInput.value !== getLocalStorage.email) {
    emailInput.classList.add("false");
    emailInput.classList.remove("true");
    textEmail.classList.add("active");
    paragraphEmail.innerHTML = "Email cant blank";
    paragraphEmail.style.color = "red";
    iconErrorEmail.style.color = "red";
    iconTrueEmail.style.display = "none";
    iconErrorEmail.style.display = "block";
  } else {
    emailInput.classList.remove("false");
    emailInput.classList.add("true");
    textEmail.classList.add("active");
    paragraphEmail.innerHTML = "Email validation";
    paragraphEmail.style.color = "#38ad3c";
    iconTrueEmail.style.color = "#38ad3c";
    iconTrueEmail.style.display = "block";
    iconErrorEmail.style.display = "none";
  }
};

let KeyUpFuncEmail = function () {
  emailInput.addEventListener("keyup", function () {
    EmailFuncInt();

    if (emailInput.value == "") {
      emailInput.classList.remove("false");
      emailInput.classList.remove("true");
      textEmail.classList.remove("active");
    }
  });
};

export { EmailFuncInt, KeyUpFuncEmail };
