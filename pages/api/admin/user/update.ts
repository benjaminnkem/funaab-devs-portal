import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import dbConnection from "../../../../utils/db";
import UserModel from "../../../../utils/schemas/users/UserModel";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (!token) {
    res.status(401).json({ msg: "Unauthorized Access" });
  }

  if (req.method === "POST") {
    const { username, fullName, department, phoneNumber, bio } = req.body;

    try {
      await dbConnection();

      const user = await UserModel.findOne({ username: username }, { _id: 1 });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await UserModel.updateOne({ _id: new ObjectId(user.id) }, { $set: { fullName, department, phoneNumber, bio } });
      res.status(200).json({ message: "Success" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
