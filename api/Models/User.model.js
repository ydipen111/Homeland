import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: string,
    required: true,
    unique: true
  },
  password: {
    type: string,
    requied: true
  }

}, { timestamps: true });

const User = mangoose.model('user', userSchema);
export default User;