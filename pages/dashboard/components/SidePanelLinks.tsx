"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const SidePanelLinks = () => {
  const currentPath = usePathname();
  const { data: session, status } = useSession();
  const [accountDrop, setAccountDrop] = useState(false);

  const showDrop = () => {
    setAccountDrop(!accountDrop);
  };

  if (status === "authenticated")
    return (
      <aside className="overflow-x-hidden bg-white dark:bg-gray-800 dark:text-gray-50 text-gray-900 h-full fixed lg:w-[320px] md:w-[280px] w-[65px] duration-200 z-10">
        <div className="px-6">
          <div className="flex items-center justify-between py-3">
            <h1 className="hidden text-2xl font-bold sm:inline-block">
              FDev<span className="text-gray-500">.</span>
            </h1>
            <Link href={"/"}>
              <Image src={"/images/logos/logo.png"} alt="The FUNAAB's Logo" width={60} height={60} />
            </Link>
          </div>
          <div className="mt-3 text-center">
            <div className={`relative`}>
              <Image
                src={session.user.image ? session.user.image : "/images/users/blank-user-profile.png"}
                alt="Admin Pic"
                width={100}
                height={100}
                title="Profile Image"
                className="mx-auto border-4 border-white rounded-full shadow-xl aspect-square"
                draggable="false"
              ></Image>
              <div className="absolute w-5 h-5 bottom-0 bg-[#23f634] rounded-full right-[5.5rem] border-2 border-[#36ff46]"></div>
            </div>
            <p className="mt-3 text-xs font-semibold dark:text-gray-200">Nkem Benjamin</p>
          </div>
        </div>

        <div className="mt-5">
          <Link href="/dashboard">
            <div
              className={`grid hover:shadow-md items-center px-6 duration-75 hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 py-2 select-none ${
                styles.links
              } ${
                currentPath === "/dashboard"
                  ? "dark:border-l-2 dark:border-purple-50 dark:bg-transparent bg-purple-600 text-gray-50"
                  : ""
              }`}
            >
              <i className="text-xl ri-home-3-fill"></i>
              <p className="hidden md:inline-block">Dashboard</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${styles.links}`}
            >
              <i className="text-xl ri-user-3-fill"></i>
              <p className="hidden md:inline-block">Course Registration</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${
                styles.links
              } ${
                currentPath === "/dashboard/store"
                  ? "dark:border-l-2 dark:border-purple-50 dark:bg-transparent bg-purple-600 text-gray-50"
                  : ""
              }`}
            >
              <i className="text-xl ri-book-3-line"></i>
              <p className="hidden md:inline-block">Result</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${
                styles.links
              } ${
                currentPath === "/dashboard/store"
                  ? "dark:border-l-2 dark:border-purple-50 dark:bg-transparent bg-purple-600 text-gray-50"
                  : ""
              }`}
            >
              <i className="text-xl ri-money-dollar-box-line"></i>
              <p className="hidden md:inline-block">Payment</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${styles.links}`}
            >
              <i className="text-xl ri-user-smile-line"></i>
              <p className="hidden md:inline-block">Chat Rooms</p>
            </div>
          </Link>
          <Link href={`/${session.user.name}`} onClick={showDrop}>
            <div
              className={`grid hover:shadow-md items-center px-6 duration-75 hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 py-2 select-none ${
                styles.links
              } ${
                currentPath === `/${session.user.name}`
                  ? "dark:border-l-2 dark:border-purple-50 dark:bg-transparent bg-purple-600 text-gray-50"
                  : ""
              }`}
            >
              <i className="text-xl ri-settings-3-fill"></i>
              <p className="hidden md:inline-block">Account</p>
            </div>
          </Link>

          {/* About dropdown */}
          <div className={`overflow-x-hidden duration-200 ${accountDrop ? "h-24" : "h-[.05px]"} hidden sm:block`}>
            <Link href={`/${session.user.name}`}>
              <div className="flex items-center py-1 pl-24 space-x-4 duration-200 bg-purple-300 hover:bg-purple-400 dark:bg-transparent dark:hover:bg-gray-700 text-start">
                <i className="ri-user-2-fill"></i> <span>Profile</span>
              </div>
            </Link>
            <Link href={`${session.user.name}?tab=settings`}>
              <div className="flex items-center py-1 pl-24 space-x-4 duration-200 bg-purple-300 hover:bg-purple-400 dark:bg-transparent dark:hover:bg-gray-700 text-start">
                <i className="ri-settings-2-line"></i> <span>Settings</span>
              </div>
            </Link>
            <Link href={`${session.user.name}?tab=update`}>
              <div className="flex items-center py-1 pl-24 space-x-4 duration-200 bg-purple-300 hover:bg-purple-400 dark:bg-transparent dark:hover:bg-gray-700 text-start">
                <i className="ri-key-2-line"></i> <span>Change Password</span>
              </div>
            </Link>
          </div>

          <Link href="#" onClick={() => signOut()}>
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${styles.links}`}
            >
              <i className="text-xl ri-logout-box-r-line"></i>
              <p className="hidden md:inline-block">Log Out</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-purple-500 hover:text-purple-50 dark:hover:bg-gray-700 ${styles.links}`}
            >
              <i className="text-xl ri-information-fill"></i>
              <p className="hidden md:inline-block">About</p>
            </div>
          </Link>
        </div>

        <div className="sticky mt-10 text-center bottom-2">
          <p className="text-xs text-gray-500 bottom-3 left-1/2 right-1/2">Created by #FunaabsDevTeam</p>
        </div>
      </aside>
    );
};

export default SidePanelLinks;
