import { NextApiResponse, NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import dbConnection from "../../../../utils/db";
import UserModel from "../../../../utils/schemas/users/UserModel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  if (!token) return null;
  const { userEmail } = req.query;

  await dbConnection();
  const userData = await UserModel.findOne({ email: userEmail });

  res.status(200).json(userData);
}
