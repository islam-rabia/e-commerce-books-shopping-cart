let wishListDataArray = JSON.parse(localStorage.getItem("wishListDataArray") || "[]");
function saveDataInLocalStorage(wishContainer, index) {
    let counterNumber = document.querySelector(".counter p");
    let counter = document.querySelector(".counter");
    let singleProduct = wishContainer[index];
    let checking = wishListDataArray.find((el) => el.id === singleProduct.id);
    if (checking) {
        wishListDataArray = wishListDataArray.map((el) => el.id === singleProduct.id ? Object.assign(Object.assign({}, el), { quantity: el.quantity + 1 }) : el);
    }
    else {
        wishListDataArray.push(Object.assign(Object.assign({}, singleProduct), { quantity: 1 }));
    }
    counterNumber.innerHTML = wishListDataArray.length.toString();
    counter.classList.add("active");
    localStorage.setItem("wishListDataArray", JSON.stringify(wishListDataArray));
}
export { saveDataInLocalStorage };
