class UI {
    constructor() {

    }

    setLocation(loc) {
        document.getElementById('w-location').innerText = loc;
    }

    setDes(des) {
        document.getElementById('w-desc').innerText = des;
    }

    setCTemp(cTemp) {
        document.getElementById('ctemp').innerText = 'Current Temp: '+ cTemp + ' C';
    }

    setIcon(icon) {
        document.getElementById('w-icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
    }

    setHigh(high) {
        document.getElementById('tHigh').innerText = 'Todays High: '+high+' C';
    }

    setLow(low) {
        document.getElementById('tLow').innerText = 'Todays Low: '+low+' C';
    }

    setPressure(p) {
        document.getElementById('pressure').innerText = 'Barometric Pressure: '+p+' hpa';
    }

    setWind(wind) {
        document.getElementById('winds').innerText = 'Wind Speed: '+wind + 'm/s';
    } 

    /*showLoading(){
        const div = document.createElement('div');
        div.className = ('alert alert-info');
        div.appendChild(document.createTextNode('Grabbing Your Location...'));
        const parent = document.getElementById('info');
        const box = document.getElementById('gbox');
        parent.insertBefore(div, box);
    }*/

}