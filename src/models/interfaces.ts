export interface Weather {
    condition: string,
    description: string,
    tempType: string,
    temp: number,
    alert: Alert | null
};

export interface Alert {
     event: string,
     start: number,
     end: number,
     description: string,
};