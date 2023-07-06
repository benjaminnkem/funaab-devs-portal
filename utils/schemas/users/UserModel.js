import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: "Please supply a valid email address",
  },
  department: { type: String, required: true },
  level: { type: Number, required: true, max: 700, min: 100 },
  colFalc: { type: String, required: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: () => new Date() },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
