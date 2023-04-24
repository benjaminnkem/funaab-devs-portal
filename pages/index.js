import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "remixicon/fonts/remixicon.css";
import styles from "./index.module.css";

export default function Home() {
  const routes = useRouter();

  // function moveToLogin() {}
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

            <div className="grid items-center lg:grid-cols-2 text-green-50">
              <div className="text-center lg:text-start">
                <h1 className="text-3xl font-bold md:text-4xl">
                  WELCOME TO THE NEW <span className="font-extrabold text-green-600">FUNAAB</span> PORTAL
                </h1>
                <p className="my-3 text-sm font-light md:text-base">
                  The New FUNAAB&apos;s portal comes with a pack of new features, such as improved dashboard, faster
                  loading time and more elit. Iusto, quisquam! Quas officia minus temporibus quam. Facilis, ullam id.
                  Ad, illo.
                </p>

                <div>
                  <button
                    className="px-4 py-1 transition bg-yellow-600 rounded-lg hover:bg-yellow-500"
                    onClick={() => {
                      routes.push("/login");
                    }}
                  >
                    Login
                  </button>
                  <button className="px-4 py-1 ml-3 transition border border-green-600 rounded-lg hover:bg-green-600">
                    Enquiries
                  </button>
                </div>
              </div>
              <div>
                {/* <div className="overflow-hidden border rounded-full border-cyan-500">
                  <Image src="/images/others/meet-friends.png" alt="Meet friend cover image" width={500} height={500} />
                </div> */}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
