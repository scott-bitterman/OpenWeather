/* 
    In a cloud-based system, this config would be stored in environment variables
    and supplied by something like a Secret Manager or Key Vault,
    which Azure, GCP, and AWS all have.
*/
export default {
    openWeatherAPI: {
        api_key: '6a608e8026969f31e6ea18a24dfaaebd',
        baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
    },

    // Config for other data sources (or the app generally) can be defined from here

};