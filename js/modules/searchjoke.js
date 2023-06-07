import {searchJoke} from './api.js'

// Chistes encontrados
 


export async function displayJokes() {
  const searchInput = document.getElementById('searchInput');
  const search = searchInput;

  if (!search) {
    return;
  }
  const data = await searchJoke(search);
  const { joke } = data;
  const result = document.getElementById("jokesGenerator");

  const jokeElement = document.createElement("p");
  const jokeText = document.createElement("a");
  jokeText.href = "./product.html";
  jokeText.textContent = joke.data;

  jokeElement.appendChild(jokeText);
  result.appendChild(jokeElement);
}


