const city = document.getElementById('city');
const countryName = document.getElementById('country');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const loader = document.getElementById('loader');
const dataDisplay = document.getElementById('data-display');
const weatherIcon = document.getElementById('weather-icon');


if (navigator.serviceWorker){
    navigator.serviceWorker.register('service-worker.js')
    .catch(error => {
        console.log("Didn't work", error)
    })
}


window.addEventListener('load', ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            // console.log(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude;

            const long = position.coords.longitude;
            // console.log({lat, long});

            loader.style.display = "block";
            dataDisplay.style.display = "none";

            const WEATHER_API = "https://api.weatherapi.com/v1/current.json";
            const API_KEY = "8c724cca8bd9423880a192102200110";

            fetch(`${WEATHER_API}?key=${API_KEY}&q=${lat},${long}`)
            .then(response => response.json())
            .then(data =>{
                // console.log(data)
                loader.style.display = "none";
                dataDisplay.style.display = "block";
                const { temp_c, condition } = data.current;
                const { region, country } = data.location;


                getIcon(condition.text);
                // weatherIcon.src = "https:" + condition.icon;

                city.innerText = region;
                countryName.innerText = country;
                temperature.innerText = temp_c;
                weatherCondition.innerText = condition.text;
            })
            .catch(error =>{
                loader.style.display = "none";
                dataDisplay.style.display = "block";
                // console.log(error.message);
                city.innerText = error.message;
            })
        })
    }
})


const getIcon = condition =>{
    switch (condition) {
        case 'Sunny':
            weatherIcon.src = "assets/weather-icons/sunny.svg"
            break;
        case 'Partly cloudy':
            weatherIcon.src = "assets/weather-icons/cloudy-day.svg"
            break;
        case 'Cloudy':
            weatherIcon.src = "assets/weather-icons/cloud.svg"
            break;
        case 'Overcast':
            weatherIcon.src = "assets/weather-icons/cloudy.svg"
            break;
        case 'Mist':
            weatherIcon.src = "assets/weather-icons/cloudy.svg"
            break;
        case 'Patchy rain possible':
            weatherIcon.src = "assets/weather-icons/sun-shower.svg"
            break;
        case 'Thundery outbreaks possible':
            weatherIcon.src = "assets/weather-icons/sun-thunder.svg"
            break;
        case 'Patchy light drizzle':
            weatherIcon.src = "assets/weather-icons/sun-shower.svg"
            break;
        case 'Patchy light rain':
            weatherIcon.src = "assets/weather-icons/sun-shower.svg"
            break;
        case 'Light rain':
            weatherIcon.src = "assets/weather-icons/shower.svg"
            break;
        case 'Light rain shower':
            weatherIcon.src = "assets/weather-icons/shower.svg"
            break;
        case 'Moderate rain at times':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Moderate or heavy rain shower':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Moderate rain':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Heavy rain at times':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Heavy rain':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Torrential rain shower':
            weatherIcon.src = "assets/weather-icons/rainy.svg"
            break;
        case 'Patchy light rain with thunder':
            weatherIcon.src = "assets/weather-icons/sun-thunder.svg"
            break;
        case 'Moderate or heavy rain with thunder':
            weatherIcon.src = "assets/weather-icons/thunder-storm.svg"
            break;
        default:
            break;
    }
}