const APIKey = 'a3c23bb4ca6a556e8a9eadea01080ac4';
const APIUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(APIUrl + city + `&appid=${APIKey}` );
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp  + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
    
        var weather = data.weather[0].main
            console.log("MyConsole: " + weather.toLowerCase())
        if (weather) {
            weatherIcon.src = "images/" + weather.toLowerCase() +".png"
            
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none"
        }  
    }
    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

