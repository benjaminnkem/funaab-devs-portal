import { NextApiResponse, NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (!token) return null;
   
  const tab: { userEmail?: string } = req.query;
  res.status(200).json({ email: tab.userEmail });
}
