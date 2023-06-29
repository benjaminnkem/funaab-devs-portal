import Image from "next/image";
import navStyles from "./styles/navbar.module.css";
import { useState } from "react";
import Link from "next/link";

const Navbar = ({ bgColor, textColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className={`${bgColor} ${textColor}`}>
        <div className={`flex justify-between items-center ${textColor} py-2 md:max-w-[1024px] mx-auto w-11/12`}>
          <div className="block md:hidden"></div>
          <div className="text-center md:text-start">
            <Link href="/">
              <Image
                src={"/images/logos/logo.png"}
                alt="FUNAAB Logo"
                width={160}
                height={160}
                draggable="false"
                priority
                id="funaabLogo"
                className="mx-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm md:text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Find Match</li>
              <li>
                <Link href="/auth/signup">Create Account</Link>
              </li>
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>HQ Devs</li>
            </ul>
          </nav>

          <div className="relative flex items-center space-x-6 md:hidden">
            <div onClick={toggleMobileMenu} className="absolute right-0 cursor-pointer">
              <i className="text-3xl ri-menu-4-line"></i>
            </div>
          </div>

          <div
            id="menu-list"
            className={`absolute md:hidden top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-xl grid place-content-center text-center ${
              isMenuOpen ? "opacity-100 z-20" : "-z-20 opacity-0"
            }`}
          >
            <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={toggleMobileMenu}>
              <i className="text-3xl ri-close-line"></i>
            </div>

            <ul className="grid h-full my-auto space-y-6 text-2xl text-green-100 place-content-center first:mt-4 last:mb-4">
              <li className={navStyles.menuElem}>
                <Link href="/">Home</Link>
              </li>
              <li className={navStyles.menuElem}>Find Match</li>
              <li className={navStyles.menuElem}>
                <Link href="/auth/signup">Create Account</Link>
              </li>
              <li className={navStyles.menuElem}>
                <Link href="/auth/login">Login</Link>
              </li>
              <li className={navStyles.menuElem}>HQ Devs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
