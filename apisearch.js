// Buscar chistes
function searchJoke() {
  const btnJokee = document.getElementById("btnsearch");
  const resultContainer = document.getElementById("jokesGenerator");

  btnJokee.addEventListener("click", async(e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search");
    const searchTerm = searchInput.value;
    const apiUrl =
      "https://icanhazdadjoke.com/search?term=" +
      encodeURIComponent(searchTerm);

    return fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => displayJokes(data.results, resultContainer))
      .catch((error) => console.log(error));
  });
}

// Chistes encontrados
function displayJokes(jokes, resultContainer) {
  resultContainer.textContent = 'Chistes';

  if (jokes.length === 0) {
    resultContainer.innerHTML = "No se encontraron chistes";
    return;
  }

  jokes.forEach((joke) => {
    const jokeElement = document.createElement("p");
    const jokeText = document.createElement("a");
    jokeText.href = "./product.html"; 

    jokeText.textContent = joke.joke;
    jokeElement.appendChild(jokeText);
    resultContainer.appendChild(jokeElement);
  });
}

export { searchJoke, displayJokes };
