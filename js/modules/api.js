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
export async function searchJoke(search) {
  
  if (!search) {
    return
  }
  return fetch(`${apiUrl}search?term=${search}`,{
    headers : headers,
})
  
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
  });
}

//Retorna por id

export function jokeId(Id) {
  
  if (!Id) {
    return
  }
  fetch(apiUrl = `https://icanhazdadjoke.com/j/${Id}`,{
    headers : headers,
})
  
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
  });
}









