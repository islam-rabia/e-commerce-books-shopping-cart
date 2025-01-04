let Crossword = document.querySelector(".formTwo .Crossword input");
let textCrossword = document.querySelector(".formTwo .Crossword .text");
let paragraphCrossword = document.querySelector(".formTwo .Crossword p");
let iconErrorCrossword = document.querySelector(
  ".formTwo .Crossword .text .error"
);
let iconTrueCrossword = document.querySelector(
  ".formTwo .Crossword .text .true"
);
let iconUserCrossword = document.querySelector(".Crossword .icons");
let password = document.querySelector(".formTwo .password input");

let CrosswordFunc = function () {
  if (Crossword.value === password.value) {
    Crossword.classList.remove("false");
    Crossword.classList.add("true");
    paragraphCrossword.innerHTML = "Password success validation";
    paragraphCrossword.style.color = "#38ad3c";
    textCrossword.classList.add("active");
    iconTrueCrossword.style.color = "#38ad3c";
    iconTrueCrossword.style.display = "block";
    iconErrorCrossword.style.display = "none";
    iconUserCrossword.style.top = "33%";
  } else {
    Crossword.classList.add("false");
    Crossword.classList.remove("true");
    paragraphCrossword.innerHTML = "Password address cant be blank";
    paragraphCrossword.style.color = "red";
    textCrossword.classList.add("active");
    iconErrorCrossword.style.color = "red";
    iconTrueCrossword.style.display = "none";
    iconErrorCrossword.style.display = "block";
    iconUserCrossword.style.top = "33%";
  }
};

let KeyUpFuncCrossword = () => {
  Crossword.addEventListener("keyup", () => {
    CrosswordFunc();
    if (Crossword.value == "") {
      Crossword.classList.remove("false");
      Crossword.classList.remove("true");
      textCrossword.classList.remove("active");
      iconUserCrossword.style.top = "50%";
    }
  });
};

export { KeyUpFuncCrossword, CrosswordFunc };
