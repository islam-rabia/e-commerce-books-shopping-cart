function handleMessageSuccess(index) {
  let message = document.querySelector(".message");

  message.innerHTML += `
    <li data-ion="${index}">
      <ion-icon name="close-outline"></ion-icon>
      <p>Removed to Cart</p>
    </li>
  `;

  setTimeout(() => {
    let element = document.querySelector(`li[data-ion="${index}"]`);
    element.remove();
  }, 3000);
}

export { handleMessageSuccess };
