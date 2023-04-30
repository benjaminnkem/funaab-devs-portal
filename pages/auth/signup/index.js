import Navbar from "@/components/Navbar";

import styles from "./Signup.module.css";

const NewUserSignUp = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <header className={`${styles.headerBg} md:min-h-[36rem] sm:min-h-[28rem] min-h-[20rem] relative`}>
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
                  <p className="mx-auto my-3 font-light md:max-w-4xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus aspernatur, sapiente facere
                    et odit distinctio tenetur sequi accusamus fugiat deserunt nulla enim voluptatibus minus adipisci
                    dolorum velit, non corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
                    inventore.
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

            <div className={`grid grid-cols-2 shadow-md rounded-md md:min-h-[30rem] overflow-hidden`}>
              <div className={`${styles.signUpCon}`}></div>
              <div className="p-3">
                <div className="py-4"></div>
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
