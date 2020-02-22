import express from 'express';

//Create the router for home
const homeRouter = express.Router();

//Get the details of the home page
homeRouter.get('/', async (req, res) => {
    res.send('Home page');
});

//Export the router which points to here and decides which function to run based on which http request is sent
export default homeRouter;
