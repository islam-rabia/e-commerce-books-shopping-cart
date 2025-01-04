import { UserFirst, KeyUpFunc } from "./first-user-input.js";
import { UserLast, KeyUpFuncLast } from "./last-user-input.js";
import { KeyUpFuncEmail, EmailFuncInt } from "./email-input.js";
import { KeyUpFuncPassword, PasswordFuncInt } from "./pass-one-input.js";
import { KeyUpFuncCrossword, CrosswordFunc } from "./pass-two-input.js";

let formTwo = document.querySelector(".formTwo");

let UserFirstInput = document.querySelector(".first input");
let textFirst = document.querySelector(".first .text");

let UserLastInput = document.querySelector(".last input");
let textLast = document.querySelector(".last .text");

let EmailInput = document.querySelector(".formTwo .Email input");
let textEmail = document.querySelector(".formTwo .Email .text");

let password = document.querySelector(".formTwo .password input");
let textPass = document.querySelector(".formTwo .password .text");

let Crossword = document.querySelector(".formTwo .Crossword input");
let textCrossword = document.querySelector(".formTwo .Crossword .text");

let SignValid = function () {
  formTwo.onsubmit = function (ele) {
    ele.preventDefault();
    UserFirst();
    UserLast();
    EmailFuncInt();
    PasswordFuncInt();
    CrosswordFunc();

    let UserFirstValid = /[a-zA-Z]{5,}/gi;
    let UserLastValid = /[a-zA-Z]{5,}/gi;
    let EmailRegularInput =
      /(\w+\d+@\w+.(com|net|org)|\w+@\d+\w+.(com|net|org))/gi;
    let passwordRegular = /^\d{6,}[^a-zA-Z]/gi;
    let CrosswordRegular = password.value;

    if (
      UserFirstInput.value.match(UserFirstValid) &&
      UserLastInput.value.match(UserLastValid) &&
      EmailInput.value.match(EmailRegularInput) &&
      password.value.match(passwordRegular) &&
      Crossword.value === CrosswordRegular
    ) {
      UserFirstInput.classList.remove("false");
      UserFirstInput.classList.add("true");
      textFirst.classList.add("active");

      UserLastInput.classList.remove("false");
      UserLastInput.classList.add("true");
      textLast.classList.add("active");

      EmailInput.classList.remove("false");
      EmailInput.classList.add("true");
      textEmail.classList.add("active");

      password.classList.remove("false");
      password.classList.add("true");
      textPass.classList.add("active");

      Crossword.classList.remove("false");
      Crossword.classList.add("true");
      textCrossword.classList.add("active");

      setTimeout(() => {
        location.href = "signIn.html";
      }, 1500);
    }
  };
};

export {
  KeyUpFunc,
  SignValid,
  KeyUpFuncLast,
  KeyUpFuncEmail,
  KeyUpFuncPassword,
  KeyUpFuncCrossword
};
