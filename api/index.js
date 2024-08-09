import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();



// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDb');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDb:', err);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

