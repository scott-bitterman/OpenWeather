// A place for all routes related to the current weather are here
import express, { Request, Response, NextFunction } from 'express';
// import { now } from '../controllers/';
import { now } from '../controllers/now';
const router = express.Router();

// base route for now
router.get('/', async (req: Request, res: Response) => {
    const {lat, lon} = req.query;
    const data = await now(lat, lon);
    res.send(data);
});


export default router;