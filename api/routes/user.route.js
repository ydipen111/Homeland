import express from 'express';
import { test } from '../controllers/user.controllers.js';


// Create the router instance
const userRouter = express.Router();

// Define a route using the correct router name
userRouter.get('/test', test
);

// Export the router so it can be used in other files
export default userRouter;

//router in server