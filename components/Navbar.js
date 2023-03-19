import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navbar = useRef();

  useEffect(() => {
    const scroll_function = () => {
      if (window.scrollY >= 50) {
        navbar.current.classList.add("scrollDown");
      } else {
        navbar.current.classList.remove("scrollDown");
      }
    };
    window.addEventListener("scroll", scroll_function);
    return () => {
      window.removeEventListener("scroll", scroll_function);
    };
  }, []);

  return (
    <div id="navbar" className="normal" ref={navbar}>
      <div
        id="nav_con"
        className="w-9/12 mx-auto flex items-center justify-between"
      >
        <Link href="/" className="text-2xl font-bold">
          NGISONE
        </Link>

        <nav>
          <ul className="flex items-center space-x-4">
            <li className="py-7">Contact</li>
            <li>|</li>
            <li className="py-7">
              <Link href="/signup">Get Started</Link>
            </li>
            <li className="py-7">
              <Link href="/users">Users</Link>
            </li>
            <li className="py-7">Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
