const apiKey = "cd91157f12ce9e57fd64dc3a66e598e6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const  weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     
  
      if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }else{
        var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + " c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = ""
    }
    elseif(data.weather[0].main == "Clear")
     {
        weatherIcon.src = ""
    } 
    elseif(data.weather[0].main == "Rain") 
    {
        weatherIcon.src = ""
    }
    elseif(data.weather[0].main == "Drizzle") 
    {
        weatherIcon.src = ""
    }
    elseif(data.weather[0].main == "Mist") 
    {
        weatherIcon.src = ""
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".weather").style.display = "none";
      }

      console.log(data) 
     
    }
