"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import { usePathname } from "next/navigation";

const SidePanelLinks = () => {
  const currentPath = usePathname();

  return (
    <aside className="overflow-x-hidden bg-gray-900 dark:bg-gray-800 text-purple-50 h-full fixed lg:w-[320px] md:w-[280px] w-[80px] duration-200 z-10">
      <div className="px-6">
        <div className="flex items-center justify-between py-3">
          <h1 className="hidden text-2xl sm:inline-block font-bold">
            FDev<span className="text-purple-500">.</span>
          </h1>
          <Image src={"/images/logos/logo.png"} alt="The FUNAAB's Logo" width={60} height={60} />
        </div>
        <div className="mt-3 text-center">
          <div className={`relative ${styles.adminImages}`} id="admin-image">
            <Image
              src={`/images/others/meface.jpg`}
              alt="Admin Pic"
              width={100}
              height={100}
              className="mx-auto rounded-full aspect-square"
              draggable="false"
            ></Image>
          </div>
          <p className="mt-3 text-xs font-semibold text-purple-200">Nkem Benjamin</p>
        </div>
      </div>

      <div className="mt-5">
        <Link href="/dashboard">
          <div
            className={`grid hover:shadow-md items-center px-6 duration-75 hover:bg-gray-800 dark:hover:bg-gray-700 py-2 select-none ${styles.links} ${
              currentPath === "/dashboard" ? "border-l-2 border-purple-50" : ""
            }`}
          >
            <i className="text-xl ri-home-3-fill"></i>
            <p className="hidden md:inline-block">Dashboard</p>
          </div>
        </Link>
        <Link href="#">
          <div className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 ${styles.links}`}>
            <i className="text-xl ri-user-3-fill"></i>
            <p className="hidden md:inline-block">Course Registration</p>
          </div>
        </Link>
        <Link href="#">
          <div
            className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 ${styles.links} ${
              currentPath === "/dashboard/store" ? "border-l-2 border-purple-50" : ""
            }`}
          >
            <i className="text-xl ri-book-3-line"></i>
            <p className="hidden md:inline-block">Result</p>
          </div>
        </Link>
        <Link href="#">
          <div
            className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 ${styles.links} ${
              currentPath === "/dashboard/store" ? "border-l-2 border-purple-50" : ""
            }`}
          >
            <i className="text-xl ri-money-dollar-box-line"></i>
            <p className="hidden md:inline-block">Payment</p>
          </div>
        </Link>
        <Link href="#">
          <div className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 ${styles.links}`}>
            <i className="text-xl ri-user-3-fill"></i>
            <p className="hidden md:inline-block">Chat Rooms</p>
          </div>
        </Link>
        <Link href="/dashboard/settings">
          <div
            className={`grid hover:shadow-md items-center px-6 duration-75 hover:bg-gray-800 dark:hover:bg-gray-700 py-2 select-none ${styles.links} ${
              currentPath === "/dashboard/settings" ? "border-l-2 border-purple-50" : ""
            }`}
          >
            <i className="text-xl ri-settings-3-fill"></i>
            <p className="hidden md:inline-block">Settings</p>
          </div>
        </Link>
        <Link href="#">
          <div className={`grid items-center px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 ${styles.links}`}>
            <i className="text-xl ri-information-fill"></i>
            <p className="hidden md:inline-block">About</p>
          </div>
        </Link>
      </div>

      <div className="sticky mt-10 text-center bottom-2">
        <p className="text-xs text-purple-500 bottom-3 left-1/2 right-1/2">Created by #FunaabsDevTeam</p>
      </div>
    </aside>
  );
};

export default SidePanelLinks;
