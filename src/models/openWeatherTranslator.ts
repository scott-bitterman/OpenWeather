/* 
    This module takes in a raw object response from OpenWeather API
    and transforms it into the desired wrapper schema.
*/
const { Weather } = require('./interfaces');
const { getTempType, getAlert } = require('./helpers');

export const WeatherTranslator = {

    now(openWeatherRes: any):typeof Weather {
        const { temp, weather } = openWeatherRes.current;
        const { main, description } = weather[0];
        return {
            condition: main,
            description,
            tempType: getTempType(temp),
            alert: getAlert(openWeatherRes.alerts),
            temp,
        };
    },

    // ... Add other translators here or in separate files

};