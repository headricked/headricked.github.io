import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

let latitude, longitude, maxradiuskm = 0;


export function getEarthquakes () {
    getLocation().then(function(response) {
        // url = baseUrl;
        latitude = response.coords.latitude;
        longitude = response.coords.longitude;
        maxradiuskm = 100;

        let baseUrl =`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${maxradiuskm}`;

        console.log(baseUrl);
    })
}

window.getEarthquakes = getEarthquakes;

let quake = new QuakesController('main');

quake.init();

console.log(quake);