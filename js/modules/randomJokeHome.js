import { Publish } from "./publish.js";
import { getRandomJoke } from "./api.js";

// Random Joke

export const jokeChange = new Publish('jokeChange');

export async function randomJoke() {
  const data = await getRandomJoke();
  const { joke } = data;
  const resultContainer = document.getElementById("jokesGenerator1");

  const result = document.createElement("p");
  const jokeText = document.createElement("a");
  jokeText.href = "./productPage.html";
  jokeText.textContent = joke;
  result.appendChild(jokeText);
  resultContainer.innerHTML = '';
  resultContainer.appendChild(result);

  jokeChange.publish(joke);
}


