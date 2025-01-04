function handleMessageError(index) {
  let message = document.querySelector(".message");

  message.innerHTML += `
  <li data-ion="${index}">
    <p>Removed to Loved</p>
  </li>
`;

  setTimeout(() => {
    let element = document.querySelector(`li[data-ion="${index}"]`);
    element.remove();
  }, 3000);
}

export { handleMessageError };
