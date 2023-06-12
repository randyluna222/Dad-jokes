import { randomJoke} from "./js/modules/randomJokeHome.js";
import { renderSelectJoke } from './js/modules/renderSelectJoke.js';
import { initDetails } from './js/modules/productDetails.js';
import { cartModal, addToCart } from './js/modules/cartModal.js';
import { updateProductInfo } from './js/modules/changeimg.js';


const btnRandomJoke = document.getElementById('randomJoke');
btnRandomJoke.addEventListener('click', randomJoke);

initDetails();
renderSelectJoke();
cartModal();
addToCart();
updateProductInfo(0);






