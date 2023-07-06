import UserModel from "@/utils/schemas/users/UserModel";
import dbConnection from "@/utils/db";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connecting to database
      await dbConnection();

      // Using Users Model
      const requestBody = req.body;

      // Hashing password before sending to database
      const hashedPassword = await bcryptjs.hash(requestBody.password, 12);

      const newUserData = {
        username: requestBody.username,
        fullName: requestBody.fullName,
        email: requestBody.email,
        department: requestBody.department,
        level: requestBody.level,
        colFalc: requestBody.colFalc,
        password: hashedPassword, // Sent hashed password instead
      };

      const userModel = await UserModel.create(newUserData);

      return res.status(200).json({ message: "Congrats" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "An error occurred while trying to communicate with the database", errMessage: err.message });
    }
  } else {
    res.status(405).json({ message: `The method ${req.method} is unsupported` });
  }
}

export default handler;
