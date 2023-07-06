import { useState } from "react";

import Navbar from "@/components/Navbar";
import loginStyles from "./login.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import { signIn } from "next-auth/react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLoginDemo(e) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", { redirect: false, email, password });

    if (!res.ok) {
      setLoading(false);
      return;
    }

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>FunaabDevs - Login</title>
      </Head>
      <div className={loginStyles.body}>
        <div className="grid h-full grid-rows-3">
          <div className="self-start w-4/5 mx-auto">
            <Navbar bgColor="bg-transparent" textColor="text-purple-50" />
          </div>
          <div className="self-start -mt-16 text-purple-50 md:-mt-20">
            <div className="max-w-md px-2 mx-auto mt-10 transition rounded-lg md:mt-8">
              <div className="p-4 border border-purple-400 rounded-md">
                <div className="mb-5">
                  <i className="text-2xl md:text-3xl ri-user-2-line"></i>
                </div>
                <form onSubmit={(e) => handleLoginDemo(e)}>
                  <div className="space-y-3">
                    <div>
                      <label className="block font-semibold" htmlFor="email">
                        Email:
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="w-full p-2 mt-1 text-sm bg-transparent border-b border-purple-600 focus:outline-2 focus:outline-purple-400 focus:border-inherit md:text-base"
                        value={email}
                        placeholder="example@domain.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold" htmlFor="password">
                        Password:
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full p-2 mt-1 text-sm bg-transparent border-b border-purple-600 focus:outline-2 focus:outline-purple-400 focus:border-inherit md:text-base"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Login"
                        className="w-full py-1 transition bg-purple-600 rounded-md hover:bg-purple-700 text-purple-50"
                      />
                      <p className="my-4 text-sm font-semibold text-center text-purple-100 md:my-2">
                        A Dev Fresher? Click{" "}
                        <Link href="/" className="transition border-b border-yellow-400 hover:border-yellow-200">
                          Here
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="self-end ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
