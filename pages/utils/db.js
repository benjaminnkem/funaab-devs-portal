import mongoose from "mongoose";

const dbConnection = async () => mongoose.connect(process.env.MONGODB_URI);
export default dbConnection;
