function handleMessageSuccess(index) {
    let message = document.querySelector(".message");
    message.innerHTML += `
    <li data-ion="${index}">
      <ion-icon name="checkmark-outline"></ion-icon>
      <p>Added to Cart</p>
    </li>
  `;
    setTimeout(() => {
        let element = document.querySelector(`li[data-ion="${index}"]`);
        element.remove();
    }, 3000);
}
let counter = document.querySelector(".counter");
let counterNumber = document.querySelector(".counter p");
let local = JSON.parse(localStorage.getItem("wishListDataArray") || "[]");
if (local.length === 0) {
    counter.classList.remove("active");
}
else {
    const wishListData = JSON.parse(localStorage.getItem("wishListDataArray") || "[]");
    counter.classList.add("active");
    counterNumber.innerHTML = wishListData.length;
}
export { handleMessageSuccess };
