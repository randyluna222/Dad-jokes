import { getRandomJoke, searchJoke } from './js/modules/api.js';
import { randomJoke} from "./js/modules/randomJokeHome.js";
import { displayJokes } from "./js/modules/searchjoke.js";


const btnRandomJoke = document.getElementById('randomJoke');
const btnsearch = document.getElementById('searchJoke');


btnRandomJoke.addEventListener('click', randomJoke);
btnsearch.addEventListener('click', displayJokes);

searchJoke();
getRandomJoke();



