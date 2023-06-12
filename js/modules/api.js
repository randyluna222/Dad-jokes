//import { displayJokes } from "./searchjoke.js";

//displayJokes(),


const apiUrl = "https://icanhazdadjoke.com";
const headers = {
  Accept: 'application/json',
};


//Random Joke
export async function getRandomJoke()  {
  return fetch(apiUrl, {
    headers : headers,
})
  .then((response) => response.json()) 
  .catch((error) => {
    console.error(error);
  });
}

// Buscar chistes

const apiUrll = "https://icanhazdadjoke.com/search?term=";

export async function searchJoke(search) {
  if (!search) {
    return;
  }

  return fetch(apiUrll + search, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

//Retorna por id


export async function jokeIdd(id) {
  if (!id) {
    return;
  }

  const apiUrl = 'https://icanhazdadjoke.com/';
  return fetch(`${apiUrl}j/${id}`, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
















