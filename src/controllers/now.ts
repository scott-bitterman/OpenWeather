import { now as model } from '../models/';

export function now(lat, lon) {
    // TODO: check for valid lat and lon here?
    return model(lat, lon);
}