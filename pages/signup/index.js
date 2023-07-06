import Navbar from "@/components/Navbar";

import styles from "./Signup.module.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";

const NewUserSignUp = () => {
  const [formErrorPresent, setFormErrorPresent] = useState(false);
  const [serverErrorPresent, setServerErrorPresent] = useState(false);
  const [formProcessing, setFormProcessing] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  // On Success
  const [successMessage, setSuccessMessage] = useState("");
  const [signUpBtnText, setSignUpBtnText] = useState("Sign Up 🚀");

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [colFalc, setColFalc] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    setFormProcessing(true);

    function stopProcess(errMessage) {
      setFormErrorPresent(true);
      setFormProcessing(false);
      setFormErrorMessage(errMessage);
    }

    // Validating form input
    if (password.length < 8) {
      stopProcess("Password is less than 8 characters");
      return;
    }
    if (password !== repeatPassword) {
      stopProcess("Password does not match");
      return;
    }

    const data = {
      username,
      fullName,
      email,
      department,
      level: parseInt(level),
      colFalc,
      password,
    };

    console.log(data);

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setFormProcessing(false);
      setServerErrorPresent(true);
      setSuccessMessage("");
      setFormErrorMessage("Form validation failed 😥");
      return;
    }

    // Resetting all values;
    setUsername("");
    setPassword("");
    setColFalc("");
    setLevel("");
    setRepeatPassword("");
    setEmail("");
    setDepartment("");

    // Stopping all form process...
    setFormProcessing(false);
    setServerErrorPresent(false);
    setFormErrorPresent(false);

    setSuccessMessage("Your account was created successfully 🎉");
    setSignUpBtnText("Success! 🎉");
    setTimeout(() => setSignUpBtnText("Sign Up 🚀"), 2000);
  }

  return (
    <>
      <Head>
        <title>FunaabDevs - Sign Up</title>
      </Head>
      <div id="bgCover" className={`${styles.headerBg} fixed -z-20 w-full h-full top-0 left-0`}></div>

      <main className="relative w-full h-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        {/* <Navbar textColor="text-black" bgColor="bg-purple-50" /> */}
        <nav className="bg-purple-700">
          <div className="md:max-w-[1400px] mx-auto w-11/12">
            <div className="py-4">
              <Link href="/" className="text-white">
                {/* <Image
                src={"/images/logos/logo.png"}
                alt="FUNAAB Logo"
                width={100}
                height={100}
                draggable="false"
                priority
                id="funaabLogo"
                className="mx-auto"
              /> */}
                <span className="font-bold text-2xl">
                  FDev<span className="text-purple-300">.</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="text-center text-white md:text-start md:mb-0 bg-purple-700 h-[32rem] grid place-content-center">
          <div className="text-center px-4 space-y-4 md:max-w-[1400px] mx-auto w-11/12">
            <h1 className={`text-xl font-bold uppercase md:text-4xl sm:text-2xl tracking-widest ${styles.signUpText}`}>
              JOIN THE EVOLUTION
            </h1>
            <p className="mx-auto my-3 font-light md:max-w-2xl">
              Are you ready to join one of the biggest Nigerian Developers circle and take technology to the next level{" "}
              <span className="font-semibold">Sign Up 😊</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error, eum?
            </p>

            <div className="space-x-2 flex items-center justify-center">
              <Link href={"/"}>
                <button className="flex items-center space-x-1 border-2 rounded border-purple-500 px-3 duration-200 hover:bg-purple-500 py-1">
                  <span>Home</span> <i className="ri-home-3-line"></i>
                </button>
              </Link>
              <button className="flex items-center space-x-1 border-2 rounded border-purple-500 px-3 duration-200 hover:bg-purple-500 py-1">
                <span>Contact Us</span> <i className="ri-phone-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-8 overflow-hidden h-[150px]">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <path
              d="M-10.31,26.08 C122.18,12.08 224.06,6.10 517.81,87.08 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#7e22ce" }}
            ></path>
          </svg>
        </div>

        <section className="pb-10 -mt-24">
          <div className="md:max-w-[1400px] mx-auto w-11/12 grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid place-content-center -mt-10">
              <div className="h-40 w-40 overflow-hidden rounded-full mx-auto">
                <Image
                  src={"/images/others/meface.jpg"}
                  alt="A portrait of Benjamin Nkem"
                  width={160}
                  height={160}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="text-center space-y-2 mt-2">
                <p className="text-xl font-bold dark:text-slate-400 text-slate-600">Benjamin Nkem</p>
                <p className="font-light max-w-lg mx-auto">
                  Benjamin Nkem is the creator/founder of{" "}
                  <span className="text-slate-800 dark:text-slate-400 font-bold">#TheFunaabsDev</span>, he&apos;s a
                  passionate web developer and has strive to help Nigerian be a better place with technology.
                </p>

                <div className="flex items-center space-x-3 justify-center">
                  <i className="ri-facebook-circle-fill text-3xl cursor-pointer"></i>
                  <i className="ri-whatsapp-fill text-3xl cursor-pointer"></i>
                  <i className="ri-twitter-fill text-3xl cursor-pointer"></i>
                </div>
              </div>
            </div>
            <div className="-mt-20">
              <form
                className={`p-5 rounded-2xl max-w-xl shadow-md bg-white dark:bg-slate-700 ${styles.formContainer}`}
                action="/api/signup"
                onSubmit={(e) => {
                  handleSignUp(e);
                }}
              >
                <p
                  className={`py-1 font-semibold text-center ${
                    serverErrorPresent || formErrorPresent ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {/* Setting a customer  error when any of the defined error occurs*/}
                  {(serverErrorPresent || formErrorPresent) && formErrorMessage}
                </p>
                {(!serverErrorPresent || !formErrorPresent) && (
                  <p className="py-1 font-semibold text-center text-green-500">{successMessage}</p>
                )}

                <div className="items-center md:grid-cols-2 md:gap-2 block md:grid">
                  <div className="my-3">
                    <label htmlFor="username" className="text-lg font-medium">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="fullName" className="text-lg font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Full Name"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="email" className="text-lg font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="department" className="text-lg font-medium">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Your Department"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="level" className="text-lg font-medium">
                      Level
                    </label>
                    <input
                      type="text"
                      id="level"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="What level are you in?"
                      value={level}
                      onChange={(e) => {
                        // This ensures users input numbers only - a little bug here
                        if (e.target.value.length < 4 && !isNaN(parseInt(e.target.value))) {
                          setLevel(e.target.value);
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="college" className="text-lg font-medium">
                      College/Faculty
                    </label>
                    <input
                      type="text"
                      id="college"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="College e.g COLPHYS"
                      value={colFalc}
                      onChange={(e) => {
                        setColFalc(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="password" className="text-lg font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Choose Password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="repeatPassword" className="text-lg font-medium">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Choose Password"
                      id="repeatPassword"
                      value={repeatPassword}
                      onChange={(e) => {
                        setRepeatPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  {/* {password.length < 8 ? (
                    <p className="text-sm font-bold text-center text-red-500" style={{ gridColumn: "1/3" }}>
                      Password cannot be less than 8 characters
                    </p>
                  ) : (
                    <p className="text-sm font-bold text-center text-green-500" style={{ gridColumn: "1/3" }}>
                      Password is {">"} 8 characters ✅
                    </p>
                  )} */}

                  <div style={{ gridColumn: "1/3" }}>
                    <button
                      className="relative w-full py-3 overflow-hidden duration-200 bg-purple-700 rounded-2xl text-purple-50 hover:bg-purple-600 disabled:bg-purple-300"
                      disabled={formProcessing ? true : false}
                    >
                      {signUpBtnText}{" "}
                      {formProcessing && (
                        <span className="absolute top-0 left-0 grid w-full h-full place-content-center">
                          <span className="w-10 h-10 border-8 border-purple-600 rounded-full border-t-white border-opacity-70 animate-spin"></span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <div className="py-4">
          <p className="my-3 text-base text-center md:text-sm">funaabdevteam@2023 - Nkem</p>
        </div>
      </footer>
    </>
  );
};

export default NewUserSignUp;
