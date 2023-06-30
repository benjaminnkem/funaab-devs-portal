import Navbar from "@/components/Navbar";

import styles from "./Signup.module.css";
import { useState } from "react";

const NewUserSignUp = () => {
  const [formErrorPresent, setFormErrorPresent] = useState(false);
  const [serverErrorPresent, setServerErrorPresent] = useState(false);
  const [formProcessing, setFormProcessing] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

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


    const data = { name: "Benjamin", age: 18 };
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setFormProcessing(false);
      setServerErrorPresent(true);
      setFormErrorMessage("Sorry, we cannot process your request at the moment");
      return;
    }

    setFormProcessing(false);
    setServerErrorPresent(false);
    setFormErrorPresent(false);
    setFormErrorMessage("You've signed up successfully!");
  }

  return (
    <>
      <div id="bgCover" className={`${styles.headerBg} fixed -z-20 w-full h-full top-0 left-0`}></div>
      <div className={`bg-black bg-opacity-40 fixed -z-10 w-full h-full top-0 left-0`}></div>

      <div className={`absolute top-0 left-0 w-full h-full`}>
        <main className="relative w-full h-full">
          <Navbar textColor="text-purple-50" bgColor="bg-transparent" />

          <div className="md:max-w-[1024px] mx-auto w-11/12 py-10 md:py-0 md:my-10 my-0">
            <div className={`md:grid gap-4 items-center`} style={{ gridTemplateColumns: "3fr 2fr" }}>
              <div className="mb-8 text-center text-white md:text-start md:mb-0">
                <h1 className={`text-2xl font-bold uppercase md:text-5xl sm:text-3xl ${styles.signUpText}`}>
                  JOIN THE EVOLUTION
                </h1>
                <p className="mx-auto my-3 text-lg font-light md:max-w-4xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus aspernatur, sapiente facere
                  et odit distinctio tenetur sequi accusamus
                </p>
              </div>

              <form
                className={`text-slate-700 p-5 rounded-2xl shadow-lg border border-purple-200 ${styles.formContainer}`}
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
                  {serverErrorPresent || (formErrorPresent && formErrorMessage)}
                </p>

                <div className="items-center block grid-cols-1 gap-3 space-y-4 md:space-y-2 sm:grid sm:grid-cols-2">
                  <div>
                    <label htmlFor="username" className="text-lg font-medium text-white">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="fullName" className="text-lg font-medium text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Full Name"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-lg font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="text-lg font-medium text-white">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Enter Your Department"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="level" className="text-lg font-medium text-white">
                      Level
                    </label>
                    <input
                      type="text"
                      id="level"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="What level are you in?"
                      value={level}
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="college" className="text-lg font-medium text-white">
                      College/Faculty
                    </label>
                    <input
                      type="text"
                      id="college"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="College e.g COLPHYS"
                      value={colFalc}
                      onChange={(e) => {
                        setColFalc(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-lg font-medium text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                      placeholder="Choose Password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="repeatPassword" className="text-lg font-medium text-white">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
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
                      className="relative w-full py-3 overflow-hidden duration-200 bg-purple-700 bg-opacity-40 rounded-2xl text-purple-50 hover:bg-purple-600 disabled:bg-purple-300"
                      disabled={formProcessing ? true : false}
                    >
                      Sign Up{" "}
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
        </main>
      </div>
    </>
  );
};

export default NewUserSignUp;
