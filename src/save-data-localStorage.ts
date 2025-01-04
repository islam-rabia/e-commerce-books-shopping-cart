let wishListDataArray: Object[] = JSON.parse(
  localStorage.getItem("wishListDataArray") || "[]"
);

function saveDataInLocalStorage(wishContainer: object[], index: number) {
  let counterNumber = document.querySelector(".counter p") as HTMLElement;
  let counter = document.querySelector(".counter") as HTMLElement;

  let singleProduct: any = wishContainer[index];

  let checking = wishListDataArray.find(
    (el: any) => el.id === singleProduct.id
  );
  if (checking) {
    wishListDataArray = wishListDataArray.map((el: any) =>
      el.id === singleProduct.id ? { ...el, quantity: el.quantity + 1 } : el
    );
  } else {
    wishListDataArray.push({ ...singleProduct, quantity: 1 });
  }

  counterNumber.innerHTML = wishListDataArray.length.toString();
  counter.classList.add("active");

  localStorage.setItem("wishListDataArray", JSON.stringify(wishListDataArray));
}

export { saveDataInLocalStorage };
