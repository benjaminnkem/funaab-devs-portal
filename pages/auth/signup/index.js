import Navbar from "@/components/Navbar";

import styles from "./Signup.module.css";

const NewUserSignUp = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <header className={`${styles.headerBg} md:min-h-[40rem] sm:min-h-[28rem] min-h-[24rem] relative`}>
          <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full bg-black bg-opacity-60">
            <div>
              <Navbar textColor="text-green-50" bgColor="bg-transparent" />
            </div>
            <div>
              <div className="md:max-w-[1024px] mx-auto w-11/12 ">
                <div className="text-center text-white">
                  <h1 className={`text-2xl font-bold uppercase md:text-5xl sm:text-3xl ${styles.signUpText}`}>
                    CREATE AN ACCOUNT
                  </h1>
                  <p className="mx-auto my-3 text-lg font-light md:max-w-4xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus aspernatur, sapiente facere
                    et odit distinctio tenetur sequi accusamus fugiat deserunt nulla enim voluptatibus minus adipisci
                    dolorum velit, non corrupti. Lorem ipsum dolor sit amet consecteturF
                  </p>
                </div>
              </div>
            </div>
            <div className="h-20"></div>
          </div>
        </header>

        <main>
          <section className="md:max-w-[1024px] mx-auto w-11/12 mt-24">
            <h2 className="text-xl text-center uppercase md:text-3xl mb-7">Sign Up Here</h2>

            <div className={`grid md:grid-cols-2 shadow-2xl rounded-md md:min-h-[30rem] overflow-hidden`}>
              <div className={`${styles.signUpCon} hidden md:block`}></div>
              <div className="p-5">
                <p className="py-4 text-pink-600">
                  Note: This application are strictly for FUNAABites only! <br />
                  Enter your information below
                </p>
                <form className="text-slate-700" action="/api/signup">
                  <div className="grid items-center grid-cols-2 gap-3 space-y-2">
                  <div>
                      <label htmlFor="username" className="text-lg font-medium">
                        Username
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="fullName" className="text-lg font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="Enter Full Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-lg font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="Enter Email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="text-lg font-medium">
                        Department
                      </label>
                      <input
                        type="text"
                        id="department"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="Enter Your Department"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="level" className="text-lg font-medium">
                        Level
                      </label>
                      <input
                        type="text"
                        id="level"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="What level are you in?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="college" className="text-lg font-medium">
                        College
                      </label>
                      <select name="college" id="college" className="w-full py-2 border-b focus:outline-none">
                        <option value="colphys">COLPHYS</option>
                        <option value="colphys">COLBIOS</option>
                        <option value="colphys">COLAMRUD</option>
                        <option value="colphys">COLENG</option>
                        <option value="colphys">COLEND</option>
                        <option value="colphys">COLVET</option>
                        <option value="colphys">COLNAS</option>
                        <option value="colphys">COLERM</option>
                        <option value="colphys">COLPLANT</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="password" className="text-lg font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 border-b focus:outline-none"
                        placeholder="Choose Password"
                        required
                      />
                    </div>
                    <div style={{ gridColumn: "1/3" }}>
                      <button className="w-full py-3 duration-200 bg-green-700 border-2 border-green-400 rounded-md text-green-50 hover:bg-green-600">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <div className="h-96"></div>
      </div>
    </>
  );
};

export default NewUserSignUp;
