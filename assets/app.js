const apiKey = "key here";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const error404 = document.getElementById('.not-found');

const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city){
     
    const resp = await fetch(url(city), {
        origin: "cros" });
    const respData = await resp.json();

      addWeatherToPage(respData);
     
}