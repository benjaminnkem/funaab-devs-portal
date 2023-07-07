import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./settings.module.css";
import TextField from "@mui/material/TextField";

const Settings = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return null;
  }

  if (status === "authenticated") {
    const username = session.user.name;
    return (
      <>
        <Head>
          <title>Account - @{username}</title>
        </Head>

        <div className="min-h-screen">
          <div className={`mt-10 rounded-md shadow-md overflow-hidden mx-5 max-w-5xl ${styles.accountContainer}`}>
            <div className="bg-white p-6 border">
              <div className="relative">
                <Image
                  src={session.user.image ? session.user.image : "/images/users/blank-user-profile.png"}
                  alt="Admin Pic"
                  width={90}
                  height={90}
                  title="Profile Image"
                  className="mx-auto rounded-full aspect-square shadow-sm border border-gray-200"
                  draggable="false"
                ></Image>
                <div className="absolute w-5 h-5 bottom-0 bg-[#23f634] rounded-full right-14 border-2 border-[#36ff46]"></div>
              </div>
              <div className="text-center">
                <button className="mt-4 border border-purple-700 rounded text-sm px-2 py-1">Upload Picture</button>
              </div>
            </div>
            <div className="bg-white p-6 border">
              <h1 className="text-2xl text-gray-600 mb-4 font-semibold">Account Settings</h1>

              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="my-1">
                    <label htmlFor="fullName" className="font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                      name="fullName"
                      id="fullName"
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="username" className="font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                      name="username"
                      id="username"
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="department" className="font-semibold">
                      Department
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                      name="department"
                      id="department"
                      disabled
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="phoneNumber" className="font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                  </div>
                </div>

                <button className="bg-purple-700 text-purple-50 px-4 py-2 rounded-md mt-4 hover:bg-purple-600 duration-200 hover:animate-pulse">Update ✍</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

Settings.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Settings;
