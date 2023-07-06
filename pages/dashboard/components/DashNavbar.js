import { signOut } from "next-auth/react";
import Link from "next/link";

const DashNavbar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 w-full px-4 py-4 shadow-md dark:bg-gray-900 bg-gray-50 dark:text-gray-100 z-50">
        <div className="grid items-center justify-between grid-cols-2">
          <div className="flex items-center space-x-3">
            <i className="text-2xl ri-menu-line hover:cursor-pointer"></i>
            <div className="w-full p-3 space-x-3 bg-black rounded-md dark:bg-opacity-30 bg-opacity-20">
              <i className="ri-search-2-line"></i>
              <input
                type="text"
                className="w-4/5 bg-transparent placeholder:dark:text-gray-300 placeholder:text-gray-600 focus:outline-none"
                placeholder="type to search"
              />
            </div>
          </div>
          <div className="flex items-center ml-auto space-x-4">
            {/* <i className="text-xl cursor-pointer ri-github-line"></i> */}
            <Link href={"/"}>
              {" "}
              <i className="text-xl cursor-pointer ri-home-3-line" title="Home"></i>
            </Link>
            <i className="text-xl cursor-pointer ri-notification-3-line" title="Notifications"></i>
            <i className="text-xl cursor-pointer ri-user-line" title="Profile"></i>
            <i className="text-xl cursor-pointer ri-logout-box-r-line" title="Logout" onClick={() => signOut()}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
