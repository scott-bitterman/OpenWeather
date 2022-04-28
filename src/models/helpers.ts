const { Alert } = require('./interfaces');
// import { Alert } from './interfaces';

/*
    Determins alert from original OpenWeather API alerts response
*/
export function getAlert(alerts = []):typeof Alert | null {
    const alert = alerts[0] || null;
    if (alert) {
        const { event, start, end, description } = alert;
        return {
            event,
            start,
            end,
            description
        };
    }
    return alert;
}

/*
    Derives tempType from tempTypes definitions
*/
export function getTempType(temp: number):string {
    if (temp >= 80 ) {
        return 'hot';
    } else if (temp <= 45) {
        return 'cold';
    } 
    return 'standard';
}
