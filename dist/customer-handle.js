var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { draggingSlider } from "./dragging-slider.js";
function generateData() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch("data/customer-data.json");
        let data = yield result.json();
        handling(data);
        let app = document.querySelector(".customer-description-list");
        draggingSlider(app);
    });
}
let app = document.querySelector(".customer-description-list");
function handling(data) {
    app.innerHTML = data
        .map((ele) => {
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
