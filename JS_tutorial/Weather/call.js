//key = 212fd21b1e52e7d15d6c8895a30d1bd7
class Weather {
    constructor() {
        this.key = '212fd21b1e52e7d15d6c8895a30d1bd7';
    }

    async getWeather(location) {
        //api.openweathermap.org/data/2.5/forecast?id=524901&APPID=212fd21b1e52e7d15d6c8895a30d1bd7
        //https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22
        const curWeatherResponse = await fetch(`https://samples.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${this.key}
        `);

        //const curWeatherResponse = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}`);

        const curWeather = await curWeatherResponse.json();

        return {
            curWeather
        }
    }
}    

//problems 
class Position {
    constructor() {
        this.lat = '0';
        this.lon = '0';
    }
    //might need to use getLocation
    //getLocation();

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lon =  position.coords.longitude;
            });
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}