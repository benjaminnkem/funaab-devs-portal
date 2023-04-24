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
          <div className="md:hidden block"></div>
          <div className="md:text-start text-center">
            <Link href="/">
              <Image
                src={"/images/logos/logo.png"}
                alt="FUNAAB Logo"
                width={160}
                height={160}
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
              <li><Link href='/users'>Users</Link></li>
              <li>Main Website</li>
            </ul>
          </nav>

          <div className="flex items-center space-x-6 md:hidden relative">
            {/* <Link href="/" className="cursor-pointer">
              <i className="ri ri-home-2-line text-3xl"></i>
            </Link> */}
            <div onClick={expandMenu} className="cursor-pointer absolute right-0">
              <i className="ri-menu-4-line text-3xl"></i>
            </div>
          </div>

          <div id="menu-list" className={navStyles.menuList} ref={navIconRef}>
            <div className="absolute right-10 sm:right-16 top-48 sm:top-44" onClick={collapseMenu}>
              <i className="ri-close-line text-3xl"></i>
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
