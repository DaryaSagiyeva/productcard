//задание 3 (10 урок)
import { productCards } from "./products.js";
console.log(productCards);

const productsList = document.querySelector(".products");
console.log(productsList);

function getRatingStars(ratingValue) {
  if (ratingValue === 5) {
    return `
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
    `;
  }

  if (ratingValue === 4.5) {
    return `
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star card__star--half">★</span>
    `;
  }

  if (ratingValue === 4) {
    return `
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">★</span>
      <span class="card__star">☆</span>
    `;
  }
}

function renderCards(productCards) {
  const cards = productCards
    .map(function (product) {
      return `
  <li class="products__item card">
    <div class="card__image-wrapper">
     ${product.badge ? `<span class="card__badge">${product.badge}</span>` : ""}
      <img
        src="${product.image}"
        alt="${product.title}"
        class="card__image"
      >
    </div>

    <span class="card__category">${product.category}</span>

    <h2 class="card__title">${product.title}</h2>
    <div class="card__rating">
  ${getRatingStars(product.ratingValue)}
  <span class="card__rating-value">${product.ratingValue}</span>
</div>
    <p class="card__description">${product.description}</p>

    <div class="card__compound compound">
  <span class="compound__name">Состав</span>

  <ul class="compound__list">
    ${product.compound
      .map(function (item) {
        return `<li class="compound__item">${item}</li>`;
      })
      .join("")}
  </ul>
</div>

          <div class="card__price">
            <span class="card__price-label">Цена:</span>
            <span class="card__price-value">${product.priceValue} ₽</span>
          </div>
          
  </li>
`;
    })
    .join("");

  console.log(cards);
  productsList.innerHTML = cards;
}

function getCardsCount() {
  const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  if (count >= 1 && count <= 5) {
    return count;
  }

  return 5;
}

const cardsCount = getCardsCount();

const cardsToRender = productCards.slice(0, cardsCount);

renderCards(cardsToRender);

//задание 4 (10 урок)

const productDescriptions = productCards.reduce(function (acc, product) {
  acc.push({
    [product.title]: product.description,
  });

  return acc;
}, []);

console.log(productDescriptions);
