let EmailInput = document.querySelector(".formTwo .Email input");
let textEmail = document.querySelector(".formTwo .Email .text");
let paragraphEmail = document.querySelector(".formTwo .Email p");
let iconErrorEmail = document.querySelector(".formTwo .Email .text .error");
let iconTrueEmail = document.querySelector(".formTwo .Email .text .true");

let EmailFuncInt = function () {
  let EmailRegularInput =
    /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;
  if (!EmailInput.value.match(EmailRegularInput)) {
    EmailInput.classList.add("false");
    EmailInput.classList.remove("true");
    textEmail.classList.add("active");
    paragraphEmail.innerHTML = "Email cant blank";
    paragraphEmail.style.color = "red";
    iconErrorEmail.style.color = "red";
    iconTrueEmail.style.display = "none";
    iconErrorEmail.style.display = "block";
  } else {
    EmailInput.classList.remove("false");
    EmailInput.classList.add("true");
    textEmail.classList.add("active");
    paragraphEmail.innerHTML = "Email validation";
    paragraphEmail.style.color = "#38ad3c";
    iconTrueEmail.style.color = "#38ad3c";
    iconTrueEmail.style.display = "block";
    iconErrorEmail.style.display = "none";
  }
};

let KeyUpFuncEmail = function () {
  EmailInput.addEventListener("keyup", function () {
    EmailFuncInt();

    if (EmailInput.value == "") {
      EmailInput.classList.remove("false");
      EmailInput.classList.remove("true");
      textEmail.classList.remove("active");
    }

    let getData = JSON.parse(localStorage.getItem("SignData"));

    localStorage.setItem(
      "SignData",
      JSON.stringify({ ...getData, email: EmailInput.value })
    );
  });
};

export { KeyUpFuncEmail, EmailFuncInt };
