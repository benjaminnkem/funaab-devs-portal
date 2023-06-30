import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  fullName: String,
  email: String,
  department: String,
  level: String,
  college: String,
  password: String,
});

export default mongoose.model("User", userSchema);
