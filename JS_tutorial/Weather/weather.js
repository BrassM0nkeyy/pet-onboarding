const weather  = new Weather;
const ui = new UI;
const pos = new Position;

const button = document.getElementById('wButton');

document.addEventListener('click', (e) => {
    //when clicked get the current location
    pos.getLocation();
    weather.getWeather(pos);

    console.log(weather.getWeather(pos));

});