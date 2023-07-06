"use client";
import Image from "next/image";
import Link from "next/link";
import styles from  "../styles/sidebar.module.css";
import { usePathname } from "next/navigation";


const SidePanelLinks = () => {
  const currentPath = usePathname();

  return (
    <aside className="overflow-x-hidden bg-stone-900 dark:bg-stone-800 text-stone-50 h-full fixed lg:w-[320px] md:w-[280px] w-[80px] duration-200 z-10">
      <div className="px-6">
        <div className="flex items-center justify-between py-3">
          <h1 className="hidden text-2xl sm:inline-block">BStore</h1>
        </div>
        <div className="mt-3 text-center">
          <div className={`relative ${styles.adminImages}`} id="admin-image">
            <Image
              src={`/images/others/meface.jpg`}
              alt="Admin Pic"
              width={100}
              height={100}
              className="relative mx-auto rounded-full"
              draggable="false"
            ></Image>
          </div>
          <p className="mt-3 text-xs font-semibold text-stone-200">Nkem Benjamin</p>
        </div>
      </div>

      <div className="mt-5">
        <Link href="/dashboard">
          <div
            className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-75 hover:bg-stone-800 dark:hover:bg-stone-700 py-2 select-none ${
              currentPath === "/dashboard" ? "border-l-2 border-stone-50" : ""
            }`}
          >
            <i className="text-xl ri-home-3-fill"></i>
            <p className="hidden md:inline-block">Dashboard</p>
          </div>
        </Link>
        <Link href="/dashboard/store">
          <div
            className={`grid items-center grid-cols-3 px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-stone-800 dark:hover:bg-stone-700 ${
              currentPath === "/dashboard/store" ? "border-l-2 border-stone-50" : ""
            }`}
          >
            <i className="text-xl ri-shopping-cart-fill"></i>
            <p className="hidden md:inline-block">Products</p>
          </div>
        </Link>
        <Link href="#">
          <div className="grid items-center grid-cols-3 px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-stone-800 dark:hover:bg-stone-700">
            <i className="text-xl ri-user-3-fill"></i>
            <p className="hidden md:inline-block">Users</p>
          </div>
        </Link>
        <Link href="/dashboard/settings">
          <div
            className={`grid grid-cols-3 hover:shadow-md items-center px-6 duration-75 hover:bg-stone-800 dark:hover:bg-stone-700 py-2 select-none ${
              currentPath === "/dashboard/settings" ? "border-l-2 border-stone-50" : ""
            }`}
          >
            <i className="text-xl ri-settings-3-fill"></i>
            <p className="hidden md:inline-block">Account</p>
          </div>
        </Link>
        <Link href="#">
          <div className="grid items-center grid-cols-3 px-6 py-2 duration-75 select-none hover:shadow-md hover:bg-stone-800 dark:hover:bg-stone-700">
            <i className="text-xl ri-information-fill"></i>
            <p className="hidden md:inline-block">About</p>
          </div>
        </Link>
      </div>

      <div className="sticky mt-10 text-center bottom-2">
        <p className="text-xs text-stone-500 bottom-3 left-1/2 right-1/2">Created by Benjamin Nkem</p>
      </div>
    </aside>
  );
};

export default SidePanelLinks;
