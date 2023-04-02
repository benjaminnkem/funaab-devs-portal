import { useEffect, useRef } from "react";

import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "remixicon/fonts/remixicon.css";
import styles from "./LandPage.module.css";

export default function Home() {
  const fromBottomToTop = useRef();
  const imageSlide = useRef();

  useEffect(() => {
    const fromBottomObs = new IntersectionObserver((entry) => {
      entry.forEach((entries) => {
        if (entries.isIntersecting) {
          console.log(entries.target);
        }
      });
    });

    fromBottomObs.observe(fromBottomToTop.current);

    const listOfImg = [
      "images/others/lf1.jpg",
      "images/others/lf2.jpg",
      "images/others/lf3.jpg",
      "images/others/lf4.jpg",
      "images/others/lf5.jpg",
    ];

    let indexCounter = 0;
    if (indexCounter <= 0) {
      imageSlide.current.style.background = `url(${listOfImg[0]})`;
    }
    
    setInterval(() => {
      indexCounter++;
      if (indexCounter <= listOfImg.length) {
        imageSlide.current.style.background = `url(${listOfImg[indexCounter]})`;
      } else {
        indexCounter = 0;
      }
    }, 3000);
  }, []);

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
          <div className={styles.heroShade}>
            <Navbar />
            <div
              className="w-9/12 h-full py-6 mx-auto my-auto"
              id="first__intro"
            >
              <div className="grid grid-cols-2 gap-2 pt-24 pb-16 place-items-center">
                <div className="space-y-4">
                  <h1
                    className="text-3xl font-bold uppercase md:text-4xl forBottom"
                    id="intro__head"
                  >
                    <span className="text-green-600">Welcome</span> to the home
                    of millions of{" "}
                    <span className="text-green-600">Nigerians</span>!
                  </h1>
                  <p
                    className="text-base md:text-xl sm:text-lg head-writeup forBottom"
                    style={{ textShadow: "1px 1px 1px rgb(33 33 33)" }}
                  >
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

                <div className="p-3 rounded-full w-full">
                  <div className={styles.jumboblock2}>
                    <div className="bg-slate-50"></div>
                    <div ref={imageSlide}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 319"
                style={{ zIndex: "20" }}
              >
                <path
                  fill="#f6faf6"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,117.3C672,85,768,43,864,42.7C960,43,1056,85,1152,101.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>
      </header>

      <main className={styles.sec2}>
        <section className={styles.widthStab}>
          <div className="text-center">
            <h2 className="font-semibold text-6xl" ref={fromBottomToTop}>
              MEET AND FIND INTERESTING PEOPLE FROM NIGERIA!
            </h2>
          </div>
          <div className="grid items-center grid-cols-2 gap-2 mt-20">
            <div>
              <Image
                src="/images/backgrounds/meeting-people.png"
                alt="Meet people"
                width={2000}
                height={2000}
              />
            </div>
            <div className="p-10 transition bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-lg">
              <h2 className="text-4xl font-semibold">
                <span className="font-extrabold text-green-600">NGISONE</span>{" "}
                brings you closer to people
              </h2>

              <p className="mt-4 text-xl fromBAnim">
                NgIsOne was made with love in Nigeria to bring Nigerians and
                Non-Nigerians together but focuses more on Nigerians people,
                culture, dishes, tribes and so much more....
              </p>

              <div className="my-6 fromBAnim">
                <Link
                  href="#"
                  style={{ backgroundColor: "#ffe103" }}
                  className="px-8 py-4 text-lg font-semibold shadow-lg rounded-2xl"
                >
                  Get Started <i className="ri ri-rocket-2-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#333", padding: "10px" }}></section>
        <div className="h-96"></div>
      </main>
    </>
  );
}
