export const cartModal = () => {
  const addToCartButton = document.getElementById('cart');
  const cartModal = document.getElementById('cartModal');
  const closeModalButton = cartModal.querySelector('.close');

  addToCartButton.addEventListener('click', () => {
    cartModal.style.transform = 'translateX(0)';
  });

  closeModalButton.addEventListener('click', () => {
    cartModal.style.transform = 'translateX(100%)';
  });
};



export const addToCart = () => {
  const addProductButton = document.getElementById('AddProduct');
  const clearRecentButton = document.getElementById('ClearRecent');
  const clearAllButton = document.getElementById('ClearAll');
  const cartContent = document.getElementById('cartContent');

  addProductButton.addEventListener('click', () => {
    const productName = document.querySelector('.product-info h2').textContent;
    const productPrice = document.querySelector('.product-info p strong').textContent;
    const joke = document.getElementById('gettjokeId').textContent;
    const productImage = document.querySelector('.mainProductImg').src;

    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <img src="${productImage}" alt="${productName}">
      <h3>${productName}</h3>
      <p>Price: ${productPrice}</p>
      <p>Joke: ${joke}</p>
    `;

    cartContent.appendChild(productElement);
  });

  clearRecentButton.addEventListener('click', () => {
    const recentProduct = cartContent.lastElementChild;
    if (recentProduct) {
      cartContent.removeChild(recentProduct);
    }
  });

  clearAllButton.addEventListener('click', () => {
    cartContent.innerHTML = '';
  });
};