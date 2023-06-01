import { btnJoke, resultContainer } from './app.js';
import { jokeId  } from './apiproducts.js';
import { changeImage, showProductData  } from './changeimg.js';




btnJoke();
resultContainer ();
jokeId();
changeImage();
showProductData();


const products = [
  {
    img: "./img/product-case-black.jpg",
    title: "Producto 1",
    price: "$9.99",
    joke: "Chiste del producto 1"
  },
  {
    img: "./img/product-case-white.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-pillow-black.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-pillow-white.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-poster-black.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-poster-white.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-shirt-black.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  {
    img: "./img/product-shirt-white.jpg",
    title: "Producto 2",
    price: "$19.99",
    joke: "Chiste del producto 2"
  },
  // Agrega más objetos de productos según sea necesario
];

function displayProducts() {
  const productContainer = document.getElementById("productContainer");

  // Vaciar el contenedor antes de mostrar los productos
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");

    const productImage = document.createElement("img");
    productImage.src = product.img;
    productDiv.appendChild(productImage);

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;
    productDiv.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.textContent = "Precio: " + product.price;
    productDiv.appendChild(productPrice);

    const productJoke = document.createElement("p");
    productJoke.textContent = "Chiste: " + product.joke;
    productDiv.appendChild(productJoke);

    productContainer.appendChild(productDiv);
  });
}

displayProducts();



const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    changeImage(event.target.value);
  });
});


