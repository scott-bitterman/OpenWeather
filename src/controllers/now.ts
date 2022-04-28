import { now as model } from '../models/';

export function now(lat, lon) {
    return model(lat, lon);
}