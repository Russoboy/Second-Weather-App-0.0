const apiKey = "cd91157f12ce9e57fd64dc3a66e598e6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const  weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     
