import Navbar from "@/components/Navbar";
import loginStyles from "./login.module.css";
import Head from "next/head";

const UserLogin = () => {
  return (
    <>
    <Head>
        <title>LOGIN AS A STUDENT - FUNAAB PORTAL</title>
      </Head>
      <div className={loginStyles.body}>
        <div className="w-4/5 mx-auto">
          <Navbar bgColor="bg-transparent" textColor="text-green-50" />
        </div>
        <div className="mx-auto w-4/5">
          <h2>Login as a student</h2>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
