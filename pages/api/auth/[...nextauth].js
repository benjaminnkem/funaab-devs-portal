import NextAuth from "next-auth/next";

export default NextAuth({
  providers: [],
  session: { strategy: "jwt" },
});
