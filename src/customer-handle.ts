import { draggingSlider } from "./dragging-slider.js";

async function generateData() {
  let result = await fetch("data/customer-data.json");
  let data = await result.json();

  handling(data);

  let app = document.querySelector(".customer-description-list") as HTMLElement;
  draggingSlider(app);
}

let app = document.querySelector(".customer-description-list") as HTMLElement;

function handling(data: object[]) {
  app.innerHTML = data
    .map((ele: any) => {
      let { id, title, img, description } = ele;
      return `
        <li class="product-${id}">
          <figure>
            <img
              src="${img}"
              alt="testimonial profile"
            />
          </figure>
          <h3>${title}</h3>
          <p>${description}</p>
          <ul class="icons-customer-list">
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-half-outline"></ion-icon></li>
          </ul>
        </li>
      `;
    })
    .join("");
}

export { generateData };
