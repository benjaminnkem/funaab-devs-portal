import Navbar from "@/components/Navbar";
import Head from "next/head";

import "remixicon/fonts/remixicon.css";
import styles from "./index.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNAAB&apos;s STUDENTS PORTAL CLONE - BENJAMIN NKEM</title>
      </Head>
      <div className={styles.home}>
        <div className={styles.homechil}>
          <div className={styles.homeCon}>
            <header>
              <Navbar textColor="text-green-50" bgColor="bg-transparent" />
            </header>

            <div className="grid lg:grid-cols-2 text-green-50 items-center">
              <div className="lg:text-start text-center">
                <h1 className="md:text-4xl text-3xl font-bold">
                  WELCOME TO THE NEW <span className="font-extrabold text-green-600">FUNAAB</span> PORTAL
                </h1>
                <p className="font-light my-3 md:text-base text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quisquam! Quas officia minus
                  temporibus quam. Facilis, ullam id. Ad, illo.
                </p>

                <div>
                  <button className="px-4 py-1 rounded-lg bg-yellow-600 transition hover:bg-yellow-500">Login</button>
                  <button className="px-4 py-1 rounded-lg border border-green-600 transition hover:bg-green-600 ml-3">
                    Enquiries
                  </button>
                </div>
              </div>
              <div>
                {/* <div className="overflow-hidden rounded-full border-cyan-500 border">
                  <Image src="/images/others/meet-friends.png" alt="Meet friend cover image" width={500} height={500} />
                </div> */}
              </div>
            </div>

            <div>
              <div>
                <p className="text-center text-slate-100 my-3">funaab@2023 - Benjamin Nkem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
