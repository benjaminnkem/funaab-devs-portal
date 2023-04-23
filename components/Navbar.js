import Image from "next/image";
import navStyles from "./styles/navbar.module.css";
import { useRef } from "react";
import Link from "next/link";

const Navbar = ({ bgColor, textColor }) => {
  const navIconRef = useRef(null);
  const menuElRef1 = useRef(null);
  const menuElRef2 = useRef(null);
  const menuElRef3 = useRef(null);
  const menuElRef4 = useRef(null);

  function expandMenu() {
    navIconRef.current.style.opacity = "1";
    navIconRef.current.style.zIndex = "20";

    menuElRef1.current.style.opacity = "1";
    menuElRef1.current.style.transform = "translateY(0)";

    menuElRef2.current.style.opacity = "1";
    menuElRef2.current.style.transform = "translateY(0)";

    menuElRef3.current.style.opacity = "1";
    menuElRef3.current.style.transform = "translateY(0)";

    menuElRef4.current.style.opacity = "1";
    menuElRef4.current.style.transform = "translateY(0)";
  }

  function collapseMenu() {
    navIconRef.current.style.opacity = "0";
    navIconRef.current.style.zIndex = "-10";

    menuElRef1.current.style.opacity = "0";
    menuElRef1.current.style.transform = "translateY(200%)";

    menuElRef2.current.style.opacity = "0";
    menuElRef2.current.style.transform = "translateY(200%)";

    menuElRef3.current.style.opacity = "0";
    menuElRef3.current.style.transform = "translateY(200%)";

    menuElRef4.current.style.opacity = "0";
    menuElRef4.current.style.transform = "translateY(200%)";
  }

  return (
    <>
      <div className={`${bgColor} ${textColor}`}>
        <div className={navStyles.navCon}>
          {/* <h1 id="logo" className="md:text-xl text-lg">Logo</h1> */}
          <div>
            <Image src={"/images/logos/logo.png"} alt="FUNAAB Logo" width={150} height={150} draggable="false" />
          </div>

          <nav className="md:block hidden">
            <ul className="flex space-x-6 md:text-base text-sm">
              <li>Portal</li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>News</li>
              <li>Main Website</li>
            </ul>
          </nav>

          <div className="block md:hidden cursor-pointer" onClick={expandMenu}>
            <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>

          <div id="menu-list" className={navStyles.menuList} ref={navIconRef}>
            <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={collapseMenu}>
              <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <ul className="grid space-y-6 md:text-base place-content-center h-full my-auto first:mt-4 last:mb-4 text-base sm:text-lg">
              <li className={navStyles.menuElem} ref={menuElRef1}>
                Portal
              </li>
              <li className={navStyles.menuElem} ref={menuElRef2}>
                <Link href="/login">Login</Link>
              </li>
              <li className={navStyles.menuElem} ref={menuElRef3}>
                News
              </li>
              <li className={navStyles.menuElem} ref={menuElRef4}>
                Main Website
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
