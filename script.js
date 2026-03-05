
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const products = [
  
  { id: 1, name: 'Men\'s Shirt', price: 400, category: 'men', image: 'img/men-shirt.jpg' },
  { id: 2, name: 'Men\'s Jeans', price: 700, category: 'men', image: 'img/men-jeans.jpg' },
  { id: 3, name: 'Men\'s Jacket', price: 1500, category: 'men', image: 'img/men-jacket.jpg' },
  { id: 4, name: 'Men\'s Shoes', price: 500, category: 'men', image: 'img/men-shoe.jpg' },
  { id: 5, name: 'Men\'s Watch', price: 800, category: 'men', image: 'img/men-watch.jpg' },
  { id: 6, name: 'Men\'s Belt', price: 250, category: 'men', image: 'img/men-belt.jpg' },
  { id: 7, name: 'Men\'s Socks', price: 50, category: 'men', image: 'img/men-socks.jpg' },
  { id: 8, name: 'Men\'s Hat', price: 1000, category: 'men', image: 'img/men-hat.jpg' },
  { id: 9, name: 'Men\'s Gloves', price: 400, category: 'men', image: 'img/men-glove.jpg' },
  { id: 10, name: 'Men\'s Sunglasses', price: 300, category: 'men', image: 'img/men-sunglass.jpg' },

  
  { id: 11, name: 'Women\'s Dress', price: 800, category: 'women', image: 'img/women-dress.jpg' },
  { id: 12, name: 'Women\'s Top', price: 700, category: 'women', image: 'img/women-top.jpg' },
  { id: 13, name: 'Women\'s Skirt', price: 600, category: 'women', image: 'img/women-skirt.jpg' },
  { id: 14, name: 'Women\'s Pants', price: 550, category: 'women', image: 'img/women-pants.jpg' },
  { id: 15, name: 'Women\'s Shoes', price: 400, category: 'women', image: 'img/women-shoes.jpg' },
  { id: 16, name: 'Women\'s Handbag', price: 500, category: 'women', image: 'img/women-handbag.jpg' },
  { id: 17, name: 'Women\'s Watch', price: 600, category: 'women', image: 'img/women-watch.jpg' },
  { id: 18, name: 'Women\'s Necklace', price: 2000, category: 'women', image: 'img/women-necklace.jpg' },
  { id: 19, name: 'Women\'s Earrings', price: 1500, category: 'women', image: 'img/women-earrings.jpg' },
  { id: 20, name: 'Women\'s Ring', price: 1000, category: 'women', image: 'img/women-ring.jpg' },

 
  { id: 21, name: 'Kids\' Toy', price: 400, category: 'kids', image: 'img/kids-toy.jpg' },
  { id: 22, name: 'Kids\' Book', price: 500, category: 'kids', image: 'img/kids-book.jpg' },
  { id: 23, name: 'Kids\' Game', price: 200, category: 'kids', image: 'img/kids-game.jpg' },
  { id: 24, name: 'Kids\' Puzzle', price: 150, category: 'kids', image: 'img/kids-puzzle.jpg' },
  { id: 25, name: 'Kids\' Stuffed Animal', price: 400, category: 'kids', image: 'img/kids-animal.jpg' },
  { id: 26, name: 'Kids\' Dress', price: 200, category: 'kids', image: 'img/kids-dress.jpg' },
  { id: 27, name: 'Kids\' Shirt', price: 300, category: 'kids', image: 'img/kids-shirt.jpg' },
  { id: 28, name: 'Kids\' Pants', price: 450, category: 'kids', image: 'img/kids-pants.jpg' },
  { id: 29, name: 'Kids\' Shoes', price: 500, category: 'kids', image: 'img/kids-shoes.jpg' },
  { id: 30, name: 'Kids\' Hat', price: 300, category: 'kids', image: 'img/kids-hats.jpg' },
];

function loadProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button id="add-to-cart">Add to Cart</button>
    `;

  
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      addToCart(product.name, product.price, product.image);
      alert(`${product.name} added to cart!`);
    });

    if (product.category === "men" && document.getElementById("men-products"))
      document.getElementById("men-products").appendChild(card);

    if (product.category === "women" && document.getElementById("women-products"))
      document.getElementById("women-products").appendChild(card);

    if (product.category === "kids" && document.getElementById("kids-products"))
      document.getElementById("kids-products").appendChild(card);
  });
}

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

function loadCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (!cartItems) return;

  cartItems.innerHTML = ""; 

  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.image}" width="60">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    `;
    cartItems.appendChild(div);
  });

  if (totalElement) totalElement.innerText = "Total: ₹" + total;
}



function clearCart() {
 
  cart = [];

 
  localStorage.setItem("cart", JSON.stringify(cart));

  
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    cartItems.innerHTML = ""; 
  }

  
  const totalElement = document.getElementById("cart-total");
  if (totalElement) totalElement.innerText = "Total: ₹0";

  
  updateCartCount();
}


loadProducts();
loadCart();
updateCartCount();
