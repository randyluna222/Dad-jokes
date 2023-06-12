import { searchJoke } from './api.js';

////
const searchInput = document.getElementById('searchInput');
const jokesGenerator = document.getElementById('jokesGenerator');

async function displayJokes(event) {
  event.preventDefault();
  const searchh = searchInput.value.trim();

  if (!searchh) {
    jokesGenerator.innerHTML = 'Type something!!';
    return;
  }

  const data = await searchJoke(searchh);

  if (!data.results || !data.results.length) {
    jokesGenerator.innerHTML = 'Dont exist this type of jokes';
  } else {
    const jokes = data.results.map((result) => ({
      id: result.id,
      text: result.joke
    }));

    jokesGenerator.innerHTML = '<ul>' + jokes.map(joke => `<li><a href="productPage.html?id=${joke.id}" id="${joke.id}">${joke.text}</a></li>`).join('') + '</ul>';
  }
}

export const initSearch = () => {
  const specificBtn = document.getElementById('searchJoke');

  specificBtn.addEventListener('click', displayJokes);
}

