const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/"
  }

let searchbox = document.querySelector('.search-box');

searchbox.addEventListener("keypress", setQuery);


function setQuery(event) {
    if (event.keyCode===13) {
        console.log("enter pressed");
        console.log(searchbox.value);
        getResults(searchbox.value);
    }
}

function getResults(query) {

    const url=`${api.base}weather?q=${query}&appid=${api.key}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(weather=>{
            console.log(weather);
            if (weather.cod===200) {
                console.log(weather.cod);
                displayResults(weather);
            } else {
                alert(weather.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
          });

}

function displayResults(weatherResp) {
    let city = document.querySelector('#city');
    city.innerText = `${weatherResp.name}, ${weatherResp.sys.country}`;

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(weatherResp.main.temp)}<span>°C</span>`;

    let weather_desc = document.querySelector('#weather');
    let svg_href = `svg/${weatherResp.weather[0].icon}.svg#${weatherResp.weather[0].icon}`;
    let w_svg = `<svg id="icon"><use xlink:href="${svg_href}" /></svg>`;
    weather_desc.innerHTML = `${w_svg} ${weatherResp.weather[0].main}`;
    console.log(weatherResp.weather[0].icon);

    let templowhigh = document.querySelector('#tempLowHigh');
    templowhigh.innerText = `${Math.round(weatherResp.main.temp_min)}°C / ${Math.round(weatherResp.main.temp_max)}°C`;

    let now = new Date();
    let date = document.querySelector('#date');
    date.innerText = dateBuilder(now);
}

function dateBuilder(dateObj) {
    const DATE_FORMAT_OPTIONS = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        weekday: 'long'
    };

    return dateObj.toLocaleString('en-US', DATE_FORMAT_OPTIONS);
}