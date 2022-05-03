// A place for all routes related to the current weather are here
import express, { Request, Response } from 'express';
import { yesterday } from '../controllers/yesterday';
const router = express.Router();

// base route for now
router.get('/', async (req: Request, res: Response) => {
    const {lat, lon} = req.query;
    const data = await yesterday(lat, lon);
    res.send(data);
});

export default router;