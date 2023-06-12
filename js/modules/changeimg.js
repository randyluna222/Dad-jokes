// Array de productos
const products = [
  {
    id: 'shirt',
    imgSrc: './img/product-shirt-black.jpg',
    name: 'Black Shirt with Joke',
    price: '$13',
    color: 'black'
  },
  {
    id: 'shirt',
    imgSrc: './img/product-shirt-white.jpg',
    name: 'White Shirt with Joke',
    price: '$10',
    color: 'white'
  },
  {
    id: 'poster',
    imgSrc: './img/product-poster-black.jpg',
    name: 'Black Poster with Joke',
    price: '$5',
    color: 'black'
  },
  {
    id: 'poster',
    imgSrc: './img/product-poster-white.jpg',
    name: 'White Poster with Joke',
    price: '$3',
    color: 'white'
  },
  {
    id: 'almohada',
    imgSrc: './img/product-pillow-black.jpg',
    name: 'Black Pillow with Joke',
    price: '$15',
    color: 'black'
  },
  {
    id: 'almohada',
    imgSrc: './img/product-pillow-white.jpg',
    name: 'White Pillow with Joke',
    price: '$12',
    color: 'white'
  },
  {
    id: 'case',
    imgSrc: './img/product-case-black.jpg',
    name: 'Black Case with Joke',
    price: '$7',
    color: 'black'
  },
  {
    id: 'case',
    imgSrc: './img/product-case-white.jpg',
    name: 'White Case with Joke',
    price: '$5',
    color: 'white'
  }
];


export function updateProductInfo(index) {
  const product = products[index];
  const imgElement = document.querySelector('.mainProductImg');
  const productNameElement = document.querySelector('#productName');
  const productPriceElement = document.querySelector('#productPrice');

  imgElement.src = product.imgSrc;
  productNameElement.textContent = product.name;
  productPriceElement.textContent = product.price;
}

const productButtons = document.querySelectorAll('.another-section .product');
productButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.id;
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
      updateProductInfo(productIndex);
    }
  });
});

const colorButtons = document.querySelectorAll('input[name="color"]');
colorButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateProductInfo(index);
  });
});











