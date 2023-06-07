import { Publish } from "./publish.js";
import { getRandomJoke } from "./api.js";

// Random Joke

export const jokeChange = new Publish('joke.change');

export async function randomJoke(){
  
  const data = await getRandomJoke();
  const { joke } = data;
    const resultContainer = document.getElementById("jokesGenerator1");

  
    const result = document.createElement("p")
    const jokeText = document.createElement("a");
    jokeText.href = "./product.html"; 

    jokeText.textContent = joke;

    result.appendChild(jokeText);
    resultContainer.appendChild(result);
}


export const initRandomJokeComponent = () => {
  const randomJoke = document.getElementById('randomJoke');

  randomJoke.addEventListener('click',  randomJoke);
}

