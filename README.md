# OpenWeather Coding Exercise

This OpenWeather coding exercise explores building a small project to effectly wrap (proxy) the OpenWeather API with customized reporting on weather data. 

## Tech
Component         | Implementation   | 
------------------|------------------|
API Server | Express  |
API Client | Axios  |
Language | Node (17.6.0) / TypeScript (4.6.3)


## Setup

The config file is looking for an openWeatherAPIKey envronmnet variable so you'll have to set that. You can sign up for an API key here: https://openweathermap.org/api. 

Set the var on a Mac like so:

```$ export openWeatherAPIKey={YOUR_KEY}```

Assuming Node, NPM, and TypeScript are available, everything should be good to go by running the following from the root of the project:

```$ npm install && npm start```

If you wanted to run as a dev environment with nodemon autorefreshing, then this should also work:

```$ npm install && npm run dev```

## Tests
Run all tests from root:

```$ npm test```


## Improvements
1. Better error checking/handling
2. Improve unit and integration tests
