const weather  = new Weather;
const ui = new UI;
const pos = new Position;

pos.getLocation();

const button = document.getElementById('wButton');

button.addEventListener('click', (e) => {
    //when clicked get the current location

    //console.log(pos.lat + " " + pos.lon);

    function cap(strIn) {
        return strIn.toString().replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    weather.getWeather(pos)
    .then(result => {
        /*console.log('Current Temp: '+(result.curWeather.main.temp - 273.15).toFixed(1) + 'C');
        console.log('High: ' + (result.curWeather.main.temp_max - 273.15).toFixed(1) + 'C');
        console.log('Low: ' + (result.curWeather.main.temp_min - 273.15).toFixed(1) + 'C');
        console.log('Pressure: ' + result.curWeather.main.pressure +'hpa');
        //console.log(result.curWeather.weather);
        //console.log(result.curWeather.weather[0].main);
        console.log(cap(result.curWeather.weather[0].description));
        console.log('Wind: '+ result.curWeather.wind.speed + 'm/s');
        //console.log(typeof result.curWeather.weather.icon);
        */
       ui.setLocation(result.curWeather.name);
       //console.log(result.curWeather.name);
       ui.setDes(cap(result.curWeather.weather[0].description));
       ui.setCTemp((result.curWeather.main.temp - 273.15).toFixed(1));
       ui.setIcon(result.curWeather.weather[0].icon);
       ui.setHigh((result.curWeather.main.temp_max - 273.15).toFixed(1));
       ui.setLow((result.curWeather.main.temp_min - 273.15).toFixed(1));
       ui.setPressure(result.curWeather.main.pressure);
       ui.setWind(result.curWeather.wind.speed);
    })
    .then()

});