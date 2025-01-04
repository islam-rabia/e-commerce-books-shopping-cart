let wishListLoveData: Object[] = JSON.parse(
  localStorage.getItem("wishListLoveData") || "[]"
);
function saveToLocalStorage(element: any, index: any) {
  let Duplicate = wishListLoveData.some((id) => id === element[index]);

  if (!Duplicate) {
    wishListLoveData.push(element[index]);
    localStorage.setItem("wishListLoveData", JSON.stringify(wishListLoveData));
  }
}

export { saveToLocalStorage };
