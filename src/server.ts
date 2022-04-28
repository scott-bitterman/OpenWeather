import app from './index';
/*
    Start server and listen
    
    Decoupling this compnent from the main route definitions 
    so that integration tests can run to test the routes 
    without also starting a server.
*/
const port = 4000;
app.listen(port, () => console.log(`App is listening on port ${port}.`));
