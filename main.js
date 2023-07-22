const APIKey = 'a3c23bb4ca6a556e8a9eadea01080ac4';
const APIUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(APIUrl + city + `&appid=${APIKey}` );
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp  + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

