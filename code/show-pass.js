let eyeIconOne = document.querySelectorAll(".formTwo .eyeOff")[0];
let eyeIconTwo = document.querySelectorAll(".formTwo .eyeOff")[1];

let password = document.querySelector(".formTwo .password input");
let Crossword = document.querySelector(".formTwo .Crossword input");

let iconFunction = function () {
  eyeIconOne.addEventListener("click", function () {
    if (eyeIconOne.getAttribute("name") === "eye-off-outline") {
      eyeIconOne.setAttribute("name", "eye-outline");
      password.type = "text";
    } else {
      eyeIconOne.setAttribute("name", "eye-off-outline");
      password.type = "Password";
    }
  });
  eyeIconTwo.addEventListener("click", function () {
    if (eyeIconTwo.getAttribute("name") === "eye-off-outline") {
      eyeIconTwo.setAttribute("name", "eye-outline");
      Crossword.type = "text";
    } else {
      eyeIconTwo.setAttribute("name", "eye-off-outline");
      Crossword.type = "Password";
    }
  });
};

export { iconFunction };
