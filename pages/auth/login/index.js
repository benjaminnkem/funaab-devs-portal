import { useState } from "react";

import Navbar from "@/components/Navbar";
import loginStyles from "./login.module.css";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";

const UserLogin = () => {
  const [utmeNoInput, setUtmeNoInput] = useState("");
  const [utmeErr, setUtmeErr] = useState(false);

  function checkUtmeErr(utmeInp) {
    setUtmeNoInput(utmeInp);

    if (utmeNoInput.length > 5 && isNaN(Number.parseInt(utmeNoInput[0]))) {
      setUtmeErr(true);
    } else {
      setUtmeErr(false);
    }
  }

  async function handleLoginDemo(e) {
    e.preventDefault();
    const data = {};
    await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <Head>
        <title>LOGIN AS A STUDENT - FUNAAB PORTAL</title>
      </Head>
      <div className={loginStyles.body}>
        <div className="grid h-full grid-rows-3">
          <div className="self-start w-4/5 mx-auto">
            <Navbar bgColor="bg-transparent" textColor="text-green-50" />
          </div>
          <div className="self-start -mt-16 text-green-50 md:-mt-20">
            <div className="max-w-md px-2 mx-auto mt-10 transition rounded-lg md:mt-8">
              <div className="mb-5">
                <i className="text-2xl md:text-3xl ri-shield-user-line"></i>
              </div>

              <form onSubmit={(e) => handleLoginDemo(e)}>
                <div className="space-y-3">
                  <div>
                    <label className="block font-semibold">UTME NO:</label>
                    <input
                      type="text"
                      className="w-full p-2 mt-1 text-sm bg-transparent border-b border-green-600 focus:outline-2 focus:outline-green-400 focus:border-inherit md:text-base"
                      value={utmeNoInput}
                      placeholder="202xxxxxxxxxxx"
                      maxLength="14"
                      onChange={(e) => {
                        checkUtmeErr(e.target.value);
                      }}
                    />
                    {utmeErr && <p className="text-sm font-semibold text-yellow-500">INVALID UTME NO</p>}
                  </div>

                  <div>
                    <label className="block font-semibold">Password:</label>
                    <input
                      type="password"
                      className="w-full p-2 mt-1 text-sm bg-transparent border-b border-green-600 focus:outline-2 focus:outline-green-400 focus:border-inherit md:text-base"
                    />
                  </div>

                  <div>
                    <input
                      type="submit"
                      value="Login"
                      className="w-full py-1 transition bg-green-600 rounded-md hover:bg-green-700 text-green-50"
                    />
                    <p className="my-4 text-sm font-semibold text-center text-green-100 md:my-2">
                      A fresher? Click{" "}
                      <Link href="/" className="transition border-b border-yellow-400 hover:border-yellow-200">
                        Here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
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
