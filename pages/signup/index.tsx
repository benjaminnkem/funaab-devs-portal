import styles from "./Signup.module.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { NewUserStructure } from "../../types/NewUsers,types";

// Omitting repeated password: Not necessary when storing in DB after validation
type NewUserReady = Omit<NewUserStructure, "repeatedPassword">;

const NewUserSignUp = () => {
  const [formStatus, setFormStatus] = useState<{ loading: boolean; success: boolean }>({
    loading: false,
    success: false,
  });

  // On Success
  const [successMessage, setSuccessMessage] = useState("");
  const [signUpBtnText, setSignUpBtnText] = useState("Sign Up 🚀");

  const [formInputs, setFormInputs] = useState<NewUserStructure>({
    username: "",
    fullName: "",
    email: "",
    password: "",
    repeatedPassword: "",
    level: "",
    department: "",
  });
  const [errors, setErrors] = useState<NewUserStructure>({} as NewUserStructure);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const validateInputs = (): object => {
    const error = {} as NewUserStructure;

    if (!formInputs.username) error.username = "Username is required";
    if (!formInputs.fullName) error.fullName = "Full Name is required";
    if (!formInputs.department) error.department = "Department is required";
    if (!formInputs.level) {
      error.level = "Level is required";
    } else if (
      isNaN(formInputs.level as unknown as number) ||
      parseInt(formInputs.level) > 800 ||
      parseInt(formInputs.level) < 100
    ) {
      error.level = "Invalid Level";
    }
    if (!formInputs.email) {
      error.email = "Email is required";
    } else if (formInputs.email.substring(formInputs.email.indexOf("@") + 1, formInputs.email.length).length === 0) {
      // Checking if email contains a domain
      error.email = "Invalid email address";
    }
    if (!formInputs.password || !formInputs.repeatedPassword) {
      error.password = error.repeatedPassword = "Password is required";
    } else if (formInputs.password.length < 8) {
      error.password = "Password must not be less than 8 characters";
    } else if (formInputs.password !== formInputs.repeatedPassword) {
      error.repeatedPassword = "Password does not match";
    }

    return error;
  };

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus({ loading: true, success: false });

    const validator = validateInputs();
    setErrors(validator as NewUserStructure);

    console.log(errors);
    if (Object.keys(errors).length > 0) {
      setFormStatus({ loading: false, success: false });
      return;
    }

    if (Object.keys(errors).length === 0) {
      const data: NewUserReady = {
        username: formInputs.username,
        fullName: formInputs.fullName,
        email: formInputs.email,
        department: formInputs.department,
        level: formInputs.level,
        password: formInputs.password,
      };

      const response = await fetch("/api/admin/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setFormStatus({ loading: false, success: false });
        setSuccessMessage("");
        // setFormErrorMessage("Form validation failed 😥");
        return;
      }

      // Resetting all values;
      setFormInputs({
        username: "",
        fullName: "",
        email: "",
        password: "",
        repeatedPassword: "",
        level: "",
        department: "",
      });
      setFormStatus({ loading: false, success: true });
      setSuccessMessage("Your account was created successfully 🎉");
      setSignUpBtnText("Success! 🎉");
      setTimeout(() => setSignUpBtnText("Sign Up 🚀"), 2000);
    }
  }

  return (
    <>
      <Head>
        <title>FunaabDevs - Sign Up</title>
      </Head>
      <div id="bgCover" className={`${styles.headerBg} fixed -z-20 w-full h-full top-0 left-0`}></div>

      <main className="relative w-full h-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <Navbar textColor="text-purple-100" bgColor="bg-purple-700" />

        <div className="text-center text-white md:text-start md:mb-0 bg-purple-700 h-[32rem] grid place-content-center">
          <div className="text-center px-4 space-y-4 md:max-w-[1448px] mx-auto w-11/12">
            <h1 className={`text-xl font-bold uppercase md:text-4xl sm:text-2xl tracking-widest ${styles.signUpText}`}>
              JOIN THE EVOLUTION
            </h1>
            <p className="mx-auto my-3 font-light md:max-w-2xl">
              Are you ready to join one of the biggest Nigerian Developers circle and take technology to the next level{" "}
              <span className="font-semibold">Sign Up 😊</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error, eum?
            </p>

            <div className="flex items-center justify-center space-x-2">
              <Link href={"/"}>
                <button className="flex items-center px-3 py-1 space-x-1 duration-200 border-2 border-purple-500 rounded hover:bg-purple-500">
                  <span>Home</span> <i className="ri-home-3-line"></i>
                </button>
              </Link>
              <button className="flex items-center px-3 py-1 space-x-1 duration-200 border-2 border-purple-500 rounded hover:bg-purple-500">
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
          <div className="md:max-w-[1448px] mx-auto w-11/12 grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid my-20 -mt-10 place-content-center md:m-0">
              <div className="w-40 h-40 mx-auto overflow-hidden rounded-full">
                <Image
                  src={"/images/others/meface.jpg"}
                  alt="A portrait of Benjamin Nkem"
                  width={160}
                  height={160}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="mt-2 space-y-2 text-center">
                <p className="text-xl font-bold dark:text-slate-400 text-slate-600">Benjamin Nkem</p>
                <p className="max-w-lg mx-auto font-light">
                  Benjamin Nkem is one of the creators/founders of{" "}
                  <span className="font-bold text-slate-800 dark:text-slate-400">#TheFunaabsDev</span>, he&apos;s a
                  passionate Web Developer🕸/Data Engineer⚗ and strives to make Nigeria a better place with technology.
                </p>

                <div className="flex items-center justify-center space-x-3">
                  <i className="text-3xl cursor-pointer ri-facebook-circle-fill"></i>
                  <i className="text-3xl cursor-pointer ri-whatsapp-fill"></i>
                  <i className="text-3xl cursor-pointer ri-twitter-fill"></i>
                  <i className="text-3xl cursor-pointer ri-github-fill"></i>
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
                {formStatus.success && <p className="py-1 text-sm font-bold text-green-500">{successMessage}</p>}

                <div className="items-center block md:grid-cols-2 md:gap-2 md:grid">
                  <div className="my-3">
                    <label htmlFor="username" className="text-lg font-medium">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.username ? "border-red-600" : "border-purple-200"
                      }`}
                      placeholder="Username"
                      value={formInputs.username}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.username && <p className="py-1 text-xs font-bold text-red-500">{errors.username}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="fullName" className="text-lg font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.fullName ? "border-red-600" : "border-purple-200"
                      }`}
                      placeholder="Enter Full Name"
                      value={formInputs.fullName}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.fullName && <p className="py-1 text-xs font-bold text-red-500">{errors.fullName}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="email" className="text-lg font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.email ? "border-red-600" : "border-purple-200"
                      }`}
                      placeholder="Enter Email"
                      value={formInputs.email}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.email && <p className="py-1 text-xs font-bold text-red-500">{errors.email}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="department" className="text-lg font-medium">
                    College/Faculty/Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.department ? "border-red-600" : "border-purple-200"
                      }`}
                      placeholder="Enter Your Department"
                      value={formInputs.department}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.department && <p className="py-1 text-xs font-bold text-red-500">{errors.department}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="level" className="text-lg font-medium">
                      Level
                    </label>
                    <input
                      type="text"
                      id="level"
                      name="level"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.level ? "border-red-600" : "border-purple-200"
                      }`}
                      placeholder="What level are you in?"
                      value={formInputs.level}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.level && <p className="py-1 text-xs font-bold text-red-500">{errors.level}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="password" className="text-lg font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Choose Password"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.password ? "border-red-600" : "border-purple-200"
                      }`}
                      value={formInputs.password}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.password && <p className="py-1 text-xs font-bold text-red-500">{errors.password}</p>}
                  </div>
                  <div className="my-3">
                    <label htmlFor="repeatPassword" className="text-lg font-medium">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatedPassword"
                      placeholder="Choose Password"
                      className={`w-full p-2 bg-transparent border-b focus:outline-none ${
                        errors.repeatedPassword ? "border-red-600" : "border-purple-200"
                      }`}
                      value={formInputs.repeatedPassword}
                      onChange={(e) => handleUpdate(e)}
                      autoComplete="off"
                      required
                    />
                    {errors.repeatedPassword && (
                      <p className="py-1 text-xs font-bold text-red-500">{errors.repeatedPassword}</p>
                    )}
                  </div>

                  <div style={{ gridColumn: "1/3" }}>
                    <button
                      className="relative w-full py-3 overflow-hidden duration-200 bg-purple-700 rounded-2xl text-purple-50 hover:bg-purple-600 disabled:bg-purple-300"
                      disabled={formStatus.loading ? true : false}
                    >
                      {signUpBtnText}{" "}
                      {formStatus.loading && (
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
