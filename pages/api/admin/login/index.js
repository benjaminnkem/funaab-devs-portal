import dbConnection from "@/utils/db";
import UserModel from "@/utils/schemas/users/UserModel";
import { compare } from "bcryptjs";
import { signIn } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      await dbConnection();
      const { username, password } = data;

      const user = await UserModel.findOne({ username: username });
      if (!user || user.length === 0) {
        return res.status(401).json({ message: `The username ${username} does not exist` });
      }

      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "The password is incorrect" });
      }

      await signIn("credentials", { redirect: false, username: user.username, email: user.email }); // session creation
      res.status(200).json({ message: "You logged in successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An Error occurred while processing your request" });
    }
  } else {
    res.status(403).send("The request type " + req.method + " is not supported");
  }
}
