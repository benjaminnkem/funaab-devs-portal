import UserModel from "@/pages/schemas/users/UserModel";
import dbConnection from "@/pages/utils/db";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connecting to database
      await dbConnection();

      //Using Users Model
      const user = await UserModel.find({});
      console.log(user);

      return res.status(200).json({ message: "Congrats" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "An error occurred while trying to communicate with the database", errMessage: err.message });
    }
  } else {
    res.status(405).json({ message: `The method ${req.method} is unsupported` });
  }
}

export default handler;
