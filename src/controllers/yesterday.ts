import { yesterday as model } from '../models/';

export function yesterday(lat, lon) {
    // TODO: check for valid lat and lon here?
    return model(lat, lon);
}