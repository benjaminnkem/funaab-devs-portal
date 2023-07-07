import dbConnection from "../../../utils/db";
import UserModel from "../../../utils/schemas/users/UserModel";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

// type LoginDataType = {
//   email: string;
//   password: string;
// };

export default NextAuth({
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
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

          return { id: user.id, name: user.username, email: user.email, image: user.img }; // returning a unique cookie object
        } catch (e) {
          throw new Error("Login Failed, re-check credentials 😣");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
