import { getRandomJoke, searchJoke } from './js/modules/api.js';
import { randomJoke } from "./js/modules/randomJokeHome.js";
import { initSearch } from "./js/modules/searchjoke.js";

const btnRandomJoke = document.getElementById('randomJoke');
btnRandomJoke.addEventListener('click', randomJoke);

getRandomJoke();
initSearch();
searchJoke();