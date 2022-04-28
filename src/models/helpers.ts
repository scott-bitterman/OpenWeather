const { Alert } = require('./interfaces.ts');

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
    let typeFound = 'unknown';
    tempTypes.some(({type, def}) => {
        const isThisDef = def(temp);
        if (isThisDef) {
            typeFound = type;
            return true;
        }
    });
    return typeFound;
}

/*
    tempType definitions might be defined further for 
    any number of ranges, e.g., warm, cool, mind-numbingly-cold, or 
    scorching-hot.
*/
export const tempTypes = [

    {
        type: 'hot',
        def: (temp: number):boolean => {
            return 80 <= temp;
        },
    },
    {
        type: 'standard',
        def: (temp: number):boolean => {
            return 80 > temp && temp > 45;
        },
    },
    {
        type: 'cold',
        def: (temp: number):boolean => {
            return 45 >= temp;
        },
    },

    //... define other temp types here
];
