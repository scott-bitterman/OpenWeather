/* 
    This module handles general calls to the OpenWeather API.
    Additional calls can be added and mapped to relevant routes.
    This API caller could further be abstracted as a service and put
    into a services directory.
*/
import axios from 'axios';
import config from '../config';
import { WeatherTranslator } from './openWeatherTranslator';
const { api_key, baseURL } = config.openWeatherAPI;

// Just a simple decoupled API call for GET requests
async function callAPI(url: string): Promise<any> {
    console.log(`API request to ${baseURL} -- ATTEMPT`);
    try {    
        const res = await axios.get(url);
        console.log(`API request to ${baseURL} -- SUCCESS`);
        return res.data;
    } catch(e) {
        // console.log('Error when calling Open Weather API:', e.message, e.response.data, e.status, e.statusCode);
        throw Error(JSON.stringify(e.response.data));
    }
}

export async function now(lat: number, lon: number): Promise<any> {
    const settings = '&exclude=minutely,hourly,daily&units=imperial';
    const url = `${baseURL}?appid=${api_key}&lat=${lat}&lon=${lon}${settings}`;
    const data = await callAPI(url);
    const dataTransformed = WeatherTranslator.now(data);
    return dataTransformed;
}

export async function yesterday(lat: number, lon: number): Promise<any> {
    return await Promise.resolve({
        msg: `This is a placeholder for an API route to get yesterday's weather`,
        data: {
            lat,
            lon
        },
    });
}