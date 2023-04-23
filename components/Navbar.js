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
            <Link href="/">
              <Image
                src={"/images/logos/logo.png"}
                alt="FUNAAB Logo"
                width={150}
                height={150}
                draggable="false"
                priority
                id="funaabLogo"
              />
            </Link>
          </div>

          <nav className="md:block hidden">
            <ul className="flex space-x-6 md:text-base text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>News</li>
              <li>Main Website</li>
            </ul>
          </nav>

          <div className="block md:hidden cursor-pointer" onClick={expandMenu}>
            <svg
              fill="#dcfce7"
              width="40.959px"
              height="34.536px"
              viewBox="0 0 122.879 103.609"
              enableBackground="new 0 0 122.879 103.609"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
                />
              </g>
            </svg>
          </div>

          <div id="menu-list" className={navStyles.menuList} ref={navIconRef}>
            <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={collapseMenu}>
              <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <ul className="grid space-y-6 place-content-center h-full my-auto first:mt-4 last:mb-4 text-2xl text-green-100">
              <li className={navStyles.menuElem} ref={menuElRef1}>
                <Link href="/">Home</Link>
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
