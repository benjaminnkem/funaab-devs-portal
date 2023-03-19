import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar" className="normal transition">
      <div id="nav_con" className="w-9/12 mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          NGISONE
        </Link>

        <nav>
          <ul className="flex items-center space-x-4">
            <li className="py-7">Contact</li>
            <li>|</li>
            <li className="py-7"><Link href='/signup'>Get Started</Link></li>
            <li className="py-7">Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
