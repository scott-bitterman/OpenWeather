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
app.get('/', (req, res) => {
    res.send({msg: 'API is running.'});
});
app.use('/now', now);
app.use('/yesterday', yesterday);

// Errors
app.use((err, req, res, next) => {
    console.log(err.message);
    const errCode = JSON.parse(err.message).cod || 500;
    res.status(errCode).send(err.message);
});

export default app;