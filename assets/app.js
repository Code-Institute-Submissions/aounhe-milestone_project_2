const apiKey = "key here"
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const error404 = document.getElementById('.not-found');

search.addEventListener('click', () =>
const url = (city)=> `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')