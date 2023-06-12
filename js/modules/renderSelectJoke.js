import { getJokeId } from "./byid.js";
import { jokeIdd } from "./api.js";

export const renderSelectJoke = async () => {
  try {
    const selectedJoke = await getJokeId();
    const jokeData = await jokeIdd(selectedJoke);
    const productContainer = document.getElementById('gettjokeId');
    const productImageText = document.getElementById('secondJokeText');

    if (productContainer && productImageText) {
      productContainer.innerText = jokeData.joke;
      productImageText.innerText = jokeData.joke;
    }
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSelectJoke();
});




