const apiKey = "fdd6234a0da67e8896c2790856616d04";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

 
async function getWeatherByLocation(city){
     
    const resp = await fetch(url(city), {
        origin: "cros" });
    const respData = await resp.json();

      addWeatherToPage(respData);
     
}
