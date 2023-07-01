import UserModel from "@/pages/schemas/users/UserModel";
import dbConnection from "@/pages/utils/db";
import bcryptjs from "bcryptjs";

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
        password: hashedPassword, // Sent hashes password instead
      };

      const user = await UserModel.create(newUserData);
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
