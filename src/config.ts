/* 
    In a cloud-based system, this config would be stored in environment variables
    and supplied by something like a Secret Manager or Key Vault,
    which Azure, GCP, and AWS all have.
    
    The Open Weather API can provide an API Key @ https://openweathermap.org/api'
*/
export default {
    openWeatherAPI: {
        api_key: process.env.openWeatherAPIKey,
        baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
    },

    // Config for other data sources (or the app generally) can be defined from here

};