import UserModel from "@/pages/schemas/users/UserModel";
import dbConnection from "@/pages/utils/db";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

export default NextAuth({
  providers: [
    Credentials({
      type: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          // Connecting to DB
          await dbConnection();
          console.log("connected successfully");

          const { username, password } = credentials;
          const userExists = await UserModel.where("username").equals(username);
          if (!userExists) {
            return null;
          }

          const passwordMatch = await bcryptjs.compare(password, userExists.password);
          if (!passwordMatch) return null;

          return { id: userExists.id, username: userExists.username, email: userExists.email };
        } catch (e) {
          console.log(e);
          return new Error("Process could not be completed");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
