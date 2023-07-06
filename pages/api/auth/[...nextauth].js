import UserModel from "@/utils/schemas/users/UserModel";
import dbConnection from "@/utils/db";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    Credentials({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          await dbConnection();
          const { email, password } = credentials;

          const user = await UserModel.findOne({ email: email });
          if (!user || user.length === 0) {
            throw new Error(`The email ${email} does not exist`);
          }

          const passwordMatch = await compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("The password is incorrect");
          }

          return { id: user.id, name: user.username, email: user.email }; // returning a unique cookie object
        } catch (e) {
          console.log(e);
          throw new Error("Login Failed, re-check credentials 😣");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
