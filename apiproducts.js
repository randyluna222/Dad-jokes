export const jokeId = ""; // Reemplaza "ABC123" con el ID del chiste que deseas obtener

fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const joke = data.joke;
    console.log(joke); // Aquí puedes realizar las operaciones que desees con el chiste obtenido
  })
  .catch((error) => {
    console.log(error);
  });