const products = [
  // Men's products
  { id: 1, name: 'Men\'s Shirt', price: 20, category: 'men', image: 'img/men-shirt.jpg' },
  { id: 2, name: 'Men\'s Jeans', price: 40, category: 'men', image: 'img/men-jeans.jpg' },
  { id: 3, name: 'Men\'s Jacket', price: 60, category: 'men', image: 'img/men-jacket.jpg' },
  { id: 4, name: 'Men\'s Shoes', price: 50, category: 'men', image: 'img/men-shoe.jpg' },
  { id: 5, name: 'Men\'s Watch', price: 80, category: 'men', image: 'img/men-watch.jpg' },
  { id: 6, name: 'Men\'s Belt', price: 15, category: 'men', image: 'img/men-belt.jpg' },
  { id: 7, name: 'Men\'s Socks', price: 5, category: 'men', image: 'img/men-socks.jpg' },
  { id: 8, name: 'Men\'s Hat', price: 10, category: 'men', image: 'img/men-hat.jpg' },
  { id: 9, name: 'Men\'s Gloves', price: 20, category: 'men', image: 'img/men-glove.jpg' },
  { id: 10, name: 'Men\'s Sunglasses', price: 30, category: 'men', image: 'img/men-sunglass.jpg' },

  // Women's products
  { id: 11, name: 'Women\'s Dress', price: 30, category: 'women', image: 'img/women-dress.jpg' },
  { id: 12, name: 'Women\'s Top', price: 20, category: 'women', image: 'img/women-top.jpg' },
  { id: 13, name: 'Women\'s Skirt', price: 25, category: 'women', image: 'img/women-skirt.jpg' },
  { id: 14, name: 'Women\'s Pants', price: 35, category: 'women', image: 'img/women-pants.jpg' },
  { id: 15, name: 'Women\'s Shoes', price: 40, category: 'women', image: 'img/women-shoes.jpg' },
  { id: 16, name: 'Women\'s Handbag', price: 50, category: 'women', image: 'img/women-handbag.jpg' },
  { id: 17, name: 'Women\'s Watch', price: 60, category: 'women', image: 'img/women-watch.jpg' },
  { id: 18, name: 'Women\'s Necklace', price: 20, category: 'women', image: 'img/women-necklace.jpg' },
  { id: 19, name: 'Women\'s Earrings', price: 15, category: 'women', image: 'img/women-earrings.jpg' },
  { id: 20, name: 'Women\'s Ring', price: 10, category: 'women', image: 'img/women-ring.jpg' },

  // Kids' products
  { id: 21, name: 'Kids\' Toy', price: 10, category: 'kids', image: 'img/kids-toy.jpg' },
  { id: 22, name: 'Kids\' Book', price: 5, category: 'kids', image: 'img/kids-book.jpg' },
  { id: 23, name: 'Kids\' Game', price: 20, category: 'kids', image: 'img/kids-game.jpg' },
  { id: 24, name: 'Kids\' Puzzle', price: 15, category: 'kids', image: 'img/kids-puzzle.jpg' },
  { id: 25, name: 'Kids\' Stuffed Animal', price: 10, category: 'kids', image: 'img/kids-animal.jpg' },
  { id: 26, name: 'Kids\' Dress', price: 20, category: 'kids', image: 'img/kids-dress.jpg' },
  { id: 27, name: 'Kids\' Shirt', price: 10, category: 'kids', image: 'img/kids-shirt.jpg' },
  { id: 28, name: 'Kids\' Pants', price: 15, category: 'kids', image: 'img/kids-pants.jpg' },
  { id: 29, name: 'Kids\' Shoes', price: 20, category: 'kids', image: 'img/kids-shoes.jpg' },
  { id: 30, name: 'Kids\' Hat', price: 5, category: 'kids', image: 'img/kids-hats.jpg' },
];





// generate products
const menSection = document.querySelector('#men .products');
const womenSection = document.querySelector('#women .products');
const kidsSection = document.querySelector('#kids .products');

products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;

  if (product.category === 'men') {
    menSection.appendChild(productElement);
  } else if (product.category === 'women') {
    womenSection.appendChild(productElement);
  } else if (product.category === 'kids') {
    kidsSection.appendChild(productElement);
  }
});

// add to cart functionality
const cartIcon = document.querySelector('.cart-icon');
let cartCount = 0;

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    cartCount++;
    cartIcon.innerHTML = `Cart (${cartCount})`;
  }
});
