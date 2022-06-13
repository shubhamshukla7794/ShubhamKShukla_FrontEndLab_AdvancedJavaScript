const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/"
  }

let searchbox = document.querySelector('.search-box');

searchbox.addEventListener("keypress", setQuery);


function setQuery(event) {
    if (event.keyCode===13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {

    const url=`${api.base}weather?q=${query}&appid=${api.key}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(weather=>{
            if (weather.cod===200) {
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

    switch (`${weatherResp.weather[0].id}`) {
        case '200':
        case '201':
        case '202':
        case '210':
        case '211':
        case '212':
        case '221':
        case '230':
        case '231':
        case '232':
            document.body.style.backgroundImage = "url('../images/thunderstorm.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '300':
        case '301':
        case '302':
        case '310':
        case '311':
        case '312':
        case '313':
        case '314':
        case '321':
        case '500':
        case '501':
        case '502':
        case '503':
        case '504':
        case '511':
        case '520':
        case '521':
        case '522':
        case '531':
            document.body.style.backgroundImage = "url('../images/rain.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";  
            break;
        case '600':
        case '601':
        case '602':
        case '611':
        case '612':
        case '613':
        case '615':
        case '616':
        case '620':
        case '621':
        case '622':
            document.body.style.backgroundImage = "url('../images/snow.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '701':
            document.body.style.backgroundImage = "url('../images/mist.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '711':
            document.body.style.backgroundImage = "url('../images/smoke.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #676665"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(164, 163, 162,0.5)";
            break;
        case '721':
            document.body.style.backgroundImage = "url('../images/haze.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #676665"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(164, 163, 162,0.5)";
            break;
        case '731':
            document.body.style.backgroundImage = "url('../images/dust.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";
            break;
        case '741':
            document.body.style.backgroundImage = "url('../images/fog.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '751':
            document.body.style.backgroundImage = "url('../images/sand.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #936639"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(210, 197, 177,0.5)"; 
            break;
        case '761':
            document.body.style.backgroundImage = "url('../images/dust.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";
            break;
        case '762':
            document.body.style.backgroundImage = "url('../images/ash.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '771':
            document.body.style.backgroundImage = "url('../images/squall.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '781':
            document.body.style.backgroundImage = "url('../images/tornado.jpg')";
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)"; 
            break;
        case '800':
            if (`${weatherResp.weather[0].icon}`==="01d") {
                document.body.style.backgroundImage = "url('../images/clearsky.jpg')";  
                document.getElementById("search-city").style.borderBottom = "3px solid #1465A3"; 
                document.getElementById("search-city").style.backgroundColor = "rgba(200, 228, 249,0.5)";
            } else {
                document.body.style.backgroundImage = "url('../images/clearnight.jpg')";
                document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
                document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";    
            }
            break;
        case '801':
        case '802':
        case '803':
            switch (`${weatherResp.weather[0].icon}`) {
                case '02d':
                case '03d':
                case '04d':
                    document.body.style.backgroundImage = "url('../images/clouds.jpg')";     
                    document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
                    document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";   
                    break;
                case '02n':
                case '03n':
                case '04n':
                    document.body.style.backgroundImage = "url('../images/cloudsnight.jpg')";  
                    document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
                    document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";      
                    break;
                default:
                    break;
            }
            break;
        case '804':
            document.body.style.backgroundImage = "url('../images/overcast.jpg')"; 
            document.getElementById("search-city").style.borderBottom = "3px solid #414C55"; 
            document.getElementById("search-city").style.backgroundColor = "rgba(163, 174, 184,0.5)";
            break;
        default:
            document.body.style.backgroundImage = "url('../images/bg.jpg')";
            break;
    }


    let city = document.querySelector('#city');
    city.innerText = `${weatherResp.name}, ${weatherResp.sys.country}`;

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(weatherResp.main.temp)}<span>°C</span>`;

    let weather_desc = document.querySelector('#weather');
    let svg_href = `svg/${weatherResp.weather[0].icon}.svg#${weatherResp.weather[0].icon}`;
    let w_svg = `<svg id="icon"><use xlink:href="${svg_href}" /></svg>`;
    weather_desc.innerHTML = `${w_svg} ${weatherResp.weather[0].main}`;

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