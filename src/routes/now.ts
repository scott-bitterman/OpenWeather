// A place for all routes related to the current weather are here
import express, { Request, Response, NextFunction } from 'express';
// import { now } from '../controllers/';
import { now } from '../controllers/now';
const router = express.Router();

// base route for now
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const {lat, lon} = req.query;
    now(lat, lon)
    .then(data => {
        res.send(data);
    })
    .catch(next);
});

export default router;