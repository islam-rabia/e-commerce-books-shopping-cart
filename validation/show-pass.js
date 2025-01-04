let password = document.querySelector(".formOne .password input");
let eyeIcon = document.querySelector(".formOne .eyeOff");

let iconFunction = function () {
  eyeIcon.addEventListener("click", function () {
    if (eyeIcon.getAttribute("name") === "eye-off-outline") {
      eyeIcon.setAttribute("name", "eye-outline");
      password.type = "text";
    } else {
      eyeIcon.setAttribute("name", "eye-off-outline");
      password.type = "Password";
    }
  });
};

export { iconFunction };
