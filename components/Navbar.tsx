import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

type NavbarProps = {
  bgColor: string;
  textColor: string;
};

const Navbar = ({ bgColor, textColor }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  if (!session && status === "unauthenticated") {
    return (
      <div className={`${bgColor} ${textColor}`}>
        <div className={`flex justify-between items-center py-4 md:max-w-[1448px] mx-auto w-11/12`}>
          <div className="text-center md:text-start">
            <Link href="/">
              <span className="font-bold text-2xl">
                FDev<span className="text-purple-600">.</span>
              </span>
            </Link>
          </div>

          <nav className="hidden sm:block">
            <ul className="flex space-x-3 text-sm items-center">
              <li>
                <Link href={"/"} className="duration-200 hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className="duration-200 hover:text-purple-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="duration-200 hover:text-purple-300">
                  Developers
                </Link>
              </li>
              <li>
                <Link href={"/signup"} className="duration-200 hover:text-purple-300">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href={"/login"} className="duration-200 hover:text-purple-300">
                  <span className="bg-purple-600 rounded-md duration-200 hover:bg-purple-500 px-4 py-2 text-purple-50 flex items-center space-x-1">
                    <span>Login</span> <i className="ri-login-box-line"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative flex items-center space-x-6 sm:hidden">
            <div onClick={toggleMobileMenu} className="absolute right-0 cursor-pointer">
              <i className="text-3xl ri-menu-4-line"></i>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="menu-list"
            className={`fixed md:hidden top-0 right-0 w-[.25px] duration-200 h-full bg-black bg-opacity-70 backdrop-blur-xl grid place-content-center text-center ${
              isMenuOpen ? "opacity-100 z-20 w-screen" : "-z-20 opacity-0"
            }`}
          >
            <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={toggleMobileMenu}>
              <i className="text-3xl ri-close-line"></i>
            </div>

            <ul className="grid h-full my-auto space-y-6 text-lg text-green-100 place-content-center first:mt-4 last:mb-4">
              <li>
                <Link href={"/"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/contact"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/signup"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                  Developers
                </Link>
              </li>
              <li>
                <Link href={"/login"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                  <span className="border-b border-purple-600 rounded-md duration-200 hover:bg-purple-500 px-4 py-2 text-purple-50 flex items-center space-x-1">
                    <span>Login</span> <i className="ri-login-box-line"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


  // A more optimized version of the navbar would be created
  if (status === "authenticated")
    return (
      <>
        <div className={`${bgColor} ${textColor}`}>
          <div className={`flex justify-between items-center py-4 md:max-w-[1448px] mx-auto w-11/12`}>
            <div className="text-center md:text-start">
              <Link href="/">
                <span className="font-bold text-2xl">
                  FDev<span className="text-purple-600">.</span>
                </span>
              </Link>
            </div>

            <nav className="hidden sm:block">
              <ul className="flex space-x-3 text-sm items-center">
                <li>
                  <Link href={"/"} className="duration-200 hover:text-purple-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className="duration-200 hover:text-purple-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="duration-200 hover:text-purple-300">
                    Developers
                  </Link>
                </li>

                <li>
                  <Link href={"/signup"} className="duration-200 hover:text-purple-300">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="relative flex items-center space-x-6 sm:hidden">
              <div onClick={toggleMobileMenu} className="absolute right-0 cursor-pointer">
                <i className="text-3xl ri-menu-4-line"></i>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              id="menu-list"
              className={`fixed md:hidden top-0 right-0 w-[.25px] duration-200 h-full bg-black bg-opacity-70 backdrop-blur-xl grid place-content-center text-center ${
                isMenuOpen ? "opacity-100 z-20 w-screen" : "-z-20 opacity-0"
              }`}
            >
              <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={toggleMobileMenu}>
                <i className="text-3xl ri-close-line"></i>
              </div>

              <ul className="grid h-full my-auto space-y-6 text-lg text-green-100 place-content-center first:mt-4 last:mb-4">
                <li>
                  <Link href={"/"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/signup"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link href={"/"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"/"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href={"/login"} onClick={toggleMobileMenu} className="duration-200 hover:text-purple-300">
                    <span className="border-b border-purple-600 rounded-md duration-200 hover:bg-purple-500 px-4 py-2 text-purple-50 flex items-center space-x-1">
                      <span>Login</span> <i className="ri-login-box-line"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;
