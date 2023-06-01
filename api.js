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



export {getJoke}