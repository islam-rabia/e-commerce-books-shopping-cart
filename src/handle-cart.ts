function handleMessageSuccess(index: any) {
  let message = document.querySelector(".message") as HTMLElement;

  message.innerHTML += `
    <li data-ion="${index}">
      <ion-icon name="checkmark-outline"></ion-icon>
      <p>Added to Cart</p>
    </li>
  `;

  setTimeout(() => {
    let element = document.querySelector(
      `li[data-ion="${index}"]`
    ) as HTMLElement;
    element.remove();
  }, 3000);
}

let counter = document.querySelector(".counter") as HTMLElement;
let counterNumber = document.querySelector(".counter p") as HTMLElement;

let local: any = JSON.parse(localStorage.getItem("wishListDataArray") || "[]");
if (local.length === 0) {
  counter.classList.remove("active");
} else {
  const wishListData = JSON.parse(
    localStorage.getItem("wishListDataArray") || "[]"
  );
  counter.classList.add("active");
  counterNumber.innerHTML = wishListData.length;
}

export { handleMessageSuccess };
