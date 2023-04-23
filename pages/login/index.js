import { useEffect, useRef, useState } from "react";

import "remixicon/fonts/remixicon.css";

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

  return (
    <>
      <Head>
        <title>LOGIN AS A STUDENT - FUNAAB PORTAL</title>
      </Head>
      <div className={loginStyles.body}>
        <div className="grid grid-rows-3 h-full">
          <div className="w-4/5 mx-auto  self-start">
            <Navbar bgColor="bg-transparent" textColor="text-green-50" />
          </div>
          <div className="text-green-50 self-start md:-mt-20 -mt-16">
            <div className="max-w-md mx-auto rounded-lg transition px-2 md:mt-8 mt-10">
              <i className="ri ri-profile-fill text-2xl mb-10"></i>

              <form>
                <div className="space-y-3">
                  <div>
                    <label className="block font-semibold">UTME NO:</label>
                    <input
                      type="text"
                      className="bg-transparent focus:outline-2 focus:outline-green-400 focus:border-inherit mt-1 p-2 md:text-base text-sm w-full border-b border-green-600"
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
                      className="bg-transparent focus:outline-2 focus:outline-green-400 focus:border-inherit mt-1 p-2 md:text-base text-sm w-full border-b border-green-600"
                    />
                  </div>

                  <div>
                    <input
                      type="submit"
                      value="Login"
                      className="w-full py-1 bg-green-600 hover:bg-green-700 transition text-green-50 rounded-md"
                    />
                    <p className="text-center text-green-100 text-sm font-semibold md:my-2 my-4">
                      A fresher? Click{" "}
                      <Link href="/" className="border-b border-yellow-400">
                        Here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className=" self-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
