/* 
    This module takes in a raw object response from OpenWeather API
    and transforms it into the desired wrapper schema
*/
const { Weather } = require('./interfaces.ts');
const { getTempType, getAlert } = require('./helpers.ts');

export const WeatherTranslator = {

    now(openWeatherRes):typeof Weather {
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


/*
{
    "lat": 33.7429,
    "lon": -84.2863,
    "timezone": "America/New_York",
    "timezone_offset": -14400,
    "current": {
        "dt": 1650833446,
        "sunrise": 1650797740,
        "sunset": 1650845671,
        "temp": 80.29,
        "feels_like": 80.49,
        "pressure": 1021,
        "humidity": 44,
        "dew_point": 56.41,
        "uvi": 3.66,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 5.75,
        "wind_deg": 230,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    }
}
*/

/*
{
      "sender_name": "NWS Tulsa",
      "event": "Heat Advisory",
      "start": 1597341600,
      "end": 1597366800,
      "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
      "tags": [
        "Extreme temperature value"
        ]
    },
    */
