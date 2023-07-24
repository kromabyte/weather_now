// state
let currCity = "Santiago";
let units = "metric";

// Selectors
let city = document.querySelector(".weather__city");
let datetime = document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector('.weather__forecast');
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__min = document.querySelector(".weather__min")
let weather__max = document.querySelector(".weather__max")
let weather__realfeel = document.querySelector('.weather__realfeel');
let weather__humidity = document.querySelector('.weather__humidity');
let weather__wind = document.querySelector('.weather__wind');
let weather__pressure = document.querySelector('.weather__pressure');


// search
document.querySelector(".weather__search").addEventListener('submit', e => {
    let search = document.querySelector(".weather__searchform");
    // prevent default action
    e.preventDefault();
    // change current city
    currCity = search.value;
    // get weather forecast 
    getWeather();
    // clear form
    search.value = ""
})

// orange color default for celsius
document.getElementById("celsius").style.color = "orange";

// units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if(units !== "metric"){
        var unitsing = document.getElementById("units");
        unitsing.innerHTML = "C";

        var min_sign = document.getElementById("min_sign");
        min_sign.innerHTML = "C";
        var max_sign = document.getElementById("max_sign");
        max_sign.innerHTML = "C";
        // change to metric
        units = "metric"
        // Change the color of the element with ID "celsius" to orange
        document.getElementById("celsius").style.color = "orange";
        // Reset the color of the element with ID "fahrenheit" (optional)
        document.getElementById("fahrenheit").style.color = "";
        
        // get weather forecast 
        getWeather()
    }
})

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if(units !== "imperial"){
        var unitsing = document.getElementById("units");
        unitsing.innerHTML = "F";
        var min_sign = document.getElementById("min_sign");
        min_sign.innerHTML = "F";
        var max_sign = document.getElementById("max_sign");
        max_sign.innerHTML = "F";
        // change to imperial
        units = "imperial"
        // Change the color of the element with ID "celsius" to orange
        document.getElementById("fahrenheit").style.color = "orange";
        // Reset the color of the element with ID "fahrenheit" (optional)
        document.getElementById("celsius").style.color = "";
        // get weather forecast 
        getWeather()
    }
})

function convertTimeStamp(timestamp, timezone){
     const convertTimezone = timezone / 3600; // convert seconds to hours 

    const date = new Date(timestamp * 1000);
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12: true,
    }
    return date.toLocaleString("en-US", options)
}


// convert country code to name
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}

function getWeather(){
    const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
    console.log(data)
    city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
    datetime.innerHTML = convertTimeStamp(data.dt, data.timezone); 
    weather__forecast.innerHTML = `<p>${data.weather[0].main}`
    weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
    weather__icon.innerHTML = `   <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`
    weather__min.innerHTML = `<p>${data.main.temp_min.toFixed()}&#176</p>`
    weather__max.innerHTML = `<p>${data.main.temp_max.toFixed()}&#176</p>`
    weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
    weather__humidity.innerHTML = `${data.main.humidity}%`
    weather__wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph": "m/s"}` 
    weather__pressure.innerHTML = `${data.main.pressure} hPa`
})
}

document.body.addEventListener('load', getWeather())