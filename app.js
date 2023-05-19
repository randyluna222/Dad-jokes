function getJoke(url) {
  return fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    return data.joke;
  })
  .catch(error => {
    console.error(error);
  });
}

// Random Joke
const btnJoke = document.getElementById('randomJoke');
const jokeText = document.getElementById('jokesGenerator');

btnJoke.addEventListener('click', () => {
  getJoke('https://icanhazdadjoke.com/')
    .then(joke => {
      jokeText.textContent = joke;
    });
});

// Buscar chistes
function searchJoke() {
  const searchInput = document.getElementById('search').value;
  const apiUrl = 'https://icanhazdadjoke.com/search?term=' + encodeURIComponent(searchInput);

  return fetch(apiUrl, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => displayJokes(data.results))
  .catch(error => console.log(error));
}

// Chistes encontrados
function displayJokes(jokes) {
  const resultContainer = document.getElementById('jokesGenerator');
  resultContainer.innerHTML = '';

  if (jokes.length === 0) {
    resultContainer.innerHTML = 'No se encontraron chistes';
    return;
  }

  jokes.forEach(joke => {
    const jokeElement = document.createElement('p');
    jokeElement.textContent = joke.joke; 
    resultContainer.appendChild(jokeElement);
  });
}
