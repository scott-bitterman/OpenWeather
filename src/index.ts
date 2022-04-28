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
        originalUrl: req.originalUrl, // Remove after testing
    });
    next();
});

/*
    This is overkill to just be doing GET requests, but separating out
    routes for other functionality, sub-routes, or possible CRUD operations
    provides built in scalability.
*/
app.use('/now', now);
app.use('/yesterday', yesterday);

export default app;