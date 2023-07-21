import bcryptjs from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../../../utils/db";
import UserModel from "../../../../utils/schemas/users/UserModel";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Connecting to database
      await dbConnection();

      // Using Users Model
      const requestBody = req.body;
      const defaultImgPath = "/images/users/default.png";

      // Hashing password before sending to database
      const hashedPassword = await bcryptjs.hash(requestBody.password, 12);

      const newUserData = {
        username: requestBody.username,
        fullName: requestBody.fullName,
        email: requestBody.email,
        department: requestBody.department,
        level: parseInt(requestBody.level),
        img: defaultImgPath,
        password: hashedPassword, // Sent hashed password instead
      };

      const userModel = await UserModel.create(newUserData);
      res.status(200).json({ message: "Congrats" });
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
