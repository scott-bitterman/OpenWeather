# OpenWeather Coding Exercise

This OpenWeather coding exercise explores building a small project to effectly wrap (proxy) the OpenWeather API with customized reporting on weather data. 

## Tech
Component         | Implementation   | 
------------------|------------------|
API Server | Express  |
API Client | Axios  |
Language | Node (17.6.0) / TypeScript (4.6.3)


## Setup

Assuming Node, NPM, and TypeScript are available, everything should be good to go by running the following from the root of the project:

```$ npm install && npm start```

If you wanted to run as a dev environment with nodemon autorefreshing, then this should also work:

```$ npm install && npm run dev```

## Improvements
1. Add unit/integration tests
2. Build more robust error handling, in particular handle http error codes more formally.
3. Config in a cloud provider, e.g., GCP/AWS Secret solution conveyed via environment variables.
4. src/index.ts could be refactored to eliminate duplicate code in the routes by wrapping the core try-catch logic in a single wrapper function.
5. Consider refactoring to use proper JavaScript classes for better readability and adherance to OOP.
6. Speculation: Modeling the "controller" (Media.ts) on verbs instead of nouns might make more sense. Currently, the logic flow is based on Movies and Shows (TV). But given the MovieDB's API and the nature of the problem, an implementation that is modeled on getting data by id (a single value) and getting data by query (an array of values) might make more sense. In other words, instead of focusing on Movies, Shows, and whatever other noun, focus on actions taken on any given piece of Media. This might allow for a cleaner more elegant abstraction.
