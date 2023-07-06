import Head from 'next/head'
import Navbar from "@/components/Navbar";

import styles from "./Signup.module.css";

const NewUserSignUp = () => {
  return (
    <>
    <Head>
      <title>SIGNUP AS A STUDENT</title>
    </Head>
      <div id="bgCover" className={`${styles.headerBg} fixed -z-20 w-full h-full top-0 left-0`}></div>
      <div className={`bg-black bg-opacity-40 fixed -z-10 w-full h-full top-0 left-0`}></div>

      <div className={`absolute top-0 left-0 w-full h-full`}>
        <main>
          <Navbar textColor="text-purple-50" bgColor="bg-transparent" />
          <div>
            <div className="md:max-w-[1024px] mx-auto w-11/12 py-10 md:py-0">
              <div className={`md:grid gap-4 items-center`} style={{ gridTemplateColumns: "3fr 2fr" }}>
                <div className="mb-8 text-center text-white md:text-start md:mb-0">
                  <h1 className={`text-2xl font-bold uppercase md:text-5xl sm:text-3xl ${styles.signUpText}`}>
                    JOIN THE EVOLUTION
                  </h1>
                  <p className="mx-auto my-3 text-lg font-light md:max-w-4xl">
                    Join the second best university in Nigeria devs portal and get matched with professional developers,
                    Connect and grow your network and profile in this School.
                  </p>
                </div>

                <form
                  className={`text-slate-700 p-5 rounded-2xl shadow-lg border border-purple-200 ${styles.formContainer}`}
                  action="/api/signup"
                >
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
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="college" className="text-lg font-medium text-white">
                        College
                      </label>
                      <input
                        type="text"
                        id="college"
                        className="w-full p-2 text-purple-100 bg-transparent border-b border-purple-200 focus:outline-none"
                        placeholder="College e.g COLPHYS"
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
                        required
                      />
                    </div>
                    <div style={{ gridColumn: "1/3" }}>
                      <button className="w-full py-3 duration-200 bg-purple-700 bg-opacity-40 rounded-2xl text-purple-50 hover:bg-purple-600">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NewUserSignUp;
