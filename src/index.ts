import express from 'express';
// import { now } from './routes';
const app = express();
const router = express.Router();

const port = 4000;

/*
    Express Router could be used here to add greater modularity for
    sets of routes, e.g., there could be separate route for
    the weather now, tomorrow, the next ten days, etc. 

    const router = express.Router();
    router.use('/now', Now); 
    router.use('/tomorrow', Tomorrow); 
*/

/*
Main
*/
app.get('/', async (req: any, res: any, next) => {
    try {
        res.send(req.query);    
    } catch(e: any) {
        next(e);
    } 
});

/*
Listen
*/
app.listen(port, () => console.log(`App is listening on port ${port}.`));