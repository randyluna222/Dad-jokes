import { jokeChange } from './randomJokeHome.js'

export const initDetails = () => {
  jokeChange.subscribe(handleJokeChange);
}

const handleJokeChange = (data) => {
  const { detail } = data;
  
  const preview = document.getElementById('gettjokeId');
  const renderJoke = document.getElementById('secondJokeText');

  preview.innerHTML = detail;
  renderJoke.innerHTML = detail;
}

