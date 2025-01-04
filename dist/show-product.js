import { addToCart } from "./add-cart.js";
let productContainer = document.querySelector(".show-product-list");
function addDataInShowProduct(wishContainer, index) {
    let main = document.querySelector("#show-product ");
    let mainDiv = document.querySelector(".div");
    main.classList.add("active");
    mainDiv.addEventListener("click", () => {
        main.classList.remove("active");
    });
    let data = wishContainer[index];
    handleShowData(data, index);
}
function handleShowData(data, index) {
    let { id, img, title, price, disbound } = data;
    productContainer.innerHTML = `
    <li class="product-${id} showed">
      <div class="product-container">
        <figure>
          <img src="${img}" alt="image" />
        </figure>
        <div class="title-product">
          <h3>${title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            quidem natus ad nesciunt. A iste facere, repellendus in eveniet
            assumenda amet perferendis odit illo. Rem necessitatibus ipsum
            praesentium adipisci molestias!
          </p>
          <p>
            Price: ${price}$<span><del>${disbound}$</del></span>
          </p>
        </div>
      </div>
      <button class="feature-btn" data-ion="${index}">Add To Cart</button>
    </li>
  `;
    addToCart();
}
export { addDataInShowProduct };
