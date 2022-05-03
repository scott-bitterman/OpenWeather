import express, { Request, Response, NextFunction } from 'express';
import now from './routes/now';
import yesterday from './routes/yesterday';
const app = express();

// Middleware to log all calls
app.use((req: Request, {}, next: NextFunction) => {
    const date = new Date();
    const dateTimeISO = date.toISOString();
    console.log({
        dateTimeISO,
        originalUrl: req.originalUrl, // TODO: Remove after testing
    });
    next();
});

/*
    This is overkill to just be doing GET requests for a basic wrapper, 
    but separating out routes for other functionality, sub-routes, 
    or possible CRUD operations provides a framework to scale the app.
*/

// Health check
app.get('/', ({}, res: Response) => {
    res.send({msg: 'API is running.'});
});
app.use('/now', now);
app.use('/yesterday', yesterday);

// Generic Error Handler
app.use((err: { message: string; }, {}: any, res: Response, {}: any) => {
    console.log(err.message);
    const errObj = JSON.parse(err.message);
    const errCode = errObj.cod || 500;
    res.status(errCode).send(errObj);
});

export default app;