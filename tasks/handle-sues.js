function handleMessageSuccess(index) {
  let message = document.querySelector(".message");
  let icon = document.querySelector(".message ion-icon");
  message.innerHTML += `
  <li data-ion="${index}">
    <ion-icon name="checkmark-outline"></ion-icon>
    <p>Added to Cart</p>
  </li>
`;

  // icon.style.backgroundColor = "#3eff3e";
  setTimeout(() => {
    let element = document.querySelector(`li[data-ion="${index}"]`);
    element.remove();
  }, 3000);
}

export { handleMessageSuccess };
