// A setting needs to be tweaked for import to work
// import { WeatherTranslator } from '../../src/models/openWeatherTranslator';
// import { Alert, Weather } from '../../src/models/interfaces';
const { WeatherTranslator } = require('../../models/openWeatherTranslator');

test('Translates OpenWeather App with alert', () => {
    const res = WeatherTranslator.now(example);
    expect(typeof res).toBe('object');
    expect.objectContaining({
        alert: expect.any(Object)
    });
});

test('Handle when there is no alert', () => {
    const ex = JSON.parse(JSON.stringify(example));
    delete ex.alerts;
    const res = WeatherTranslator.now(ex);
    expect(res.alert).toBe(null);
});

test('tempType hot', () => {
    const ex = JSON.parse(JSON.stringify(example));
    ex.current.temp = 80;
    const res = WeatherTranslator.now(ex);
    expect(res.tempType).toBe('hot');
});

test('tempType moderate', () => {
    const ex = JSON.parse(JSON.stringify(example));
    ex.current.temp = 75;
    const res = WeatherTranslator.now(ex);
    expect(res.tempType).toBe('standard');
});

test('tempType cold', () => {
    const ex = JSON.parse(JSON.stringify(example));
    ex.current.temp = 45;
    const res = WeatherTranslator.now(ex);
    expect(res.tempType).toBe('cold');
});

const example = {
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
    },
    "alerts": [
        {
            "sender_name": "NWS Tulsa",
            "event": "Heat Advisory",
            "start": 1597341600,
            "end": 1597366800,
            "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING.",
            "tags": [
              "Extreme temperature value"
              ]
          },
    ]
};