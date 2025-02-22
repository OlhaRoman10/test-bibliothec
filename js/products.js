const products = [
    {
        id: 1,
        img: "images/img-6.jpg",
        name: "Monitor",
        price: 3000,
        description: "very big and beautiful",
    },
    {
        id: 2,
        img: "images/img-7.jpg",
        name: "Laptop",
        price: 20000,
        description: "very nice and powerfool laptop",
    },
    {
        id: 3,
        img: "images/img-8.jpg",
        name: "Smartphone",
        price: 4000,
        description: "very small and beautiful",
    },
    {
        id: 4,
        img: "images/img-9.jpg",
        name: "DVD-player",
        price: 2000,
        description: "simply the best",
    },

];

const container = document.querySelector(".products");
// Render
container.insertAdjacentHTML("beforeend", createCardsMarkup(products));
// Delegation
container.addEventListener("click", handlerProductClick)

function createCardsMarkup(cards) {
    return cards.map((card) => {
        return `<li class="item js-product-item" data-id="${card.id}">
            <img src="${card.img}" alt="${card.name}: ${card.description}" />
            <h3>${card.name}</h3>
            <p>Price: ${card.price} uah</p>
          </li>`;
    })
        .join("");
}
// Відсікаємо кліки не по обєкту
function handlerProductClick(event) {
    if (event.target === event.currentTarget) {
        return;
    }
    // Отримуємо той елемент, по якому клікнули
    const currentProduct = event.target.closest(".js-product-item");
    // Забираємо в неї ідентифікатор
    const id = Number(currentProduct.dataset.id);
    // Зробили пошук по масиву карток по id
    const product = products.find(product => {
        return product.id === id;
    });
    console.log(product);
    
// Відмалювали модалку
const instance = basicLightbox.create(`
    <div class="modal"> 
      <img src="${product.img}" alt="${product.description}">
      <h3>${product.name}</h3>
      <h4>${product.price}</h4>
      <p>${product.description}</p>
    </div>`);
// Викликали її показ
instance.show();
}
