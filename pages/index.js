import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import styles from "./LandPage.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NGISONE - The Home of Millions of Nigerians</title>
        <meta
          name="description"
          content="NGONE is a platform built for people in Nigeria and also people all around the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <section className={styles.hero}>
          <div>
            <Navbar />
            <div
              className="w-9/12 h-full py-6 mx-auto my-auto"
              id="first__intro"
            >
              <div className="grid grid-cols-2 gap-2 pb-16 pt-24 place-items-center">
                <div className="space-y-4">
                  <h1
                    className="text-3xl font-bold uppercase md:text-5xl forBottom"
                    id="intro__head"
                  >
                    <span className="text-green-600">Welcome</span> to the home
                    of millions of{" "}
                    <span className="text-green-600">Nigerians</span>!
                  </h1>
                  <p className="text-base md:text-xl sm:text-lg head-writeup forBottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum aspernatur temporibus atque! Consequuntur quaerat
                    error eveniet illo reprehenderit fugit officia
                  </p>

                  <div className="py-2 my-3 space-x-3">
                    <Link
                      href="/"
                      className="py-2 transition rounded-md px-7"
                      id="take__tuor"
                    >
                      Take A Tour
                    </Link>
                    <Link
                      href="/signup"
                      className="py-2 transition rounded-md px-7"
                      id="sign__up"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>

                <div className="rounded-full p-3">
                  <Image
                    src="/images/logos/ng-logo.jpg"
                    alt="Nigeria Logo"
                    className="rounded-full"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path
                  fill="#e5f5e5"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,117.3C672,85,768,43,864,42.7C960,43,1056,85,1152,101.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>
      </header>

      <main className={styles.sec2}>
        <div className="h-96"></div>
      </main>
    </>
  );
}
