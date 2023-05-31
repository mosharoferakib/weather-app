function displayWeather(data) {
    const weatherHTML = `
        <div>
            <h2>Current Weather</h2>
        </div>
        <div class="weather-card">
            <h2>Temperature</h2>
            <p>${data.temperature.toFixed(2)}°F</p>
        </div>
        <div class="weather-card">
            <h2>High</h2>
            <p>${data.highTemperature.toFixed(2)}°F</p>
        </div>
        <div class="weather-card">
            <h2>Low</h2>
            <p>${data.lowTemperature.toFixed(2)}°F</p>
        </div>
        <div class="weather-card">
            <h2>Forecast</h2>
            <p>${data.forecast}</p>
        </div>
        <div class="weather-card">
            <h2>Humidity</h2>
            <p>${data.humidity}%</p>
        </div>

    `

    weatherElement.innerHTML = weatherHTML;
}
