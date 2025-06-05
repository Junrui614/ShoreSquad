// js/app.js
// ShoreSquad: Interactive features placeholder

// Example: Show a welcome message
window.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to ShoreSquad! Rally your crew and clean the beach!');
});

// Fetch and display NEA 4-day weather forecast for Singapore
async function fetchNEAForecast() {
    const forecastUrl = 'https://api.data.gov.sg/v1/environment/4-day-weather-forecast';
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            const forecasts = data.items[0].forecasts;
            const forecastHtml = forecasts.map(day => `
                <div class="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg w-full">
                    <div class="font-bold text-blue-800">${day.day}</div>
                    <i class="fas fa-cloud-showers-heavy text-blue-400 text-3xl my-1"></i>
                    <div class="font-bold text-blue-900">${day.temperature.high}&deg; / ${day.temperature.low}&deg;C</div>
                    <div class="text-xs text-blue-700 text-center">${day.forecast}</div>
                    <div class="text-xs text-gray-500">${day.relative_humidity.low}–${day.relative_humidity.high}% humidity</div>
                </div>
            `).join('');
            const forecastContainer = document.getElementById('weather-forecast');
            if (forecastContainer) forecastContainer.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">${forecastHtml}</div>`;
        }
    } catch (err) {
        const forecastContainer = document.getElementById('weather-forecast');
        if (forecastContainer) forecastContainer.innerHTML = '<div class="text-red-500">Unable to load weather forecast.</div>';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    fetchNEAForecast();
});

// TODO: Add map integration, weather API fetch, and social features
