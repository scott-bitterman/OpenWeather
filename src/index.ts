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
    This is overkill to just be doing GET requests, but separating out
    routes for other functionality, sub-routes, or possible CRUD operations
    provides a framework to grow the app.
*/
app.get('/', ({}, res: Response) => {
    res.send({msg: 'API is running.'});
});
app.use('/now', now);
app.use('/yesterday', yesterday);

// Generic Error Handler
app.use((err, {}, res, {}) => {
    console.log(err.message);
    const errObj = JSON.parse(err.message);
    const errCode = errObj.cod || 500;
    res.status(errCode).send(errObj);
});

export default app;