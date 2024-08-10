import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const server = express();


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDb');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDb:', err);
  });


//calling to server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

server.use('/api/user', userRouter) //user router



