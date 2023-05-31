const weatherForm = document.getElementById('weatherForm')
const locationInput = document.getElementById('locationInput')
const weatherElement = document.getElementById('weather')

function convertKelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = locationInput.value
    const ser = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

    fetch(ser)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: convertKelvinToFahrenheit(data.main.temp),
                highTemperature: convertKelvinToFahrenheit(data.main.temp_max),
                lowTemperature: convertKelvinToFahrenheit(data.main.temp_min),
                forecast: data.weather[0].main,
                humidity: data.main.humidity
            };

            displayWeather(weatherData)
        })

    locationInput.value = '';
});

const txt1 = document.getElementById('locationInput')
const btn1 = document.getElementById('btn1')
const out1 = document.getElementById('output1')

function displayLocation(){
    out1.innerHTML = txt1.value 
}

btn1.addEventListener('click',displayLocation)
