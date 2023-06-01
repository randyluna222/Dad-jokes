import { searchJoke, displayJokes } from "./apisearch.js";
import { getJoke } from "./api.js";

// Random Joke
export const btnJoke = document.getElementById("randomJoke");
export const resultContainer = document.getElementById("jokesGenerator1");

const jokeElement = document.createElement("p");

btnJoke.addEventListener("click", () => {
  getJoke("https://icanhazdadjoke.com/").then((joke) => {
    const jokeText = document.createElement("a");
    jokeText.href = "./product.html"; 

    jokeText.textContent = joke;
    jokeElement.appendChild(jokeText);
    resultContainer.appendChild(jokeElement);
  });
});

searchJoke();
displayJokes();