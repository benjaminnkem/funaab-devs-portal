import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import styles from "./index.module.css";
import Link from "next/link";

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
          <div className={`${styles.homeCon}`}>
            <header>
              <Navbar textColor="text-purple-50" bgColor="bg-transparent" />
            </header>

            <div className="md:max-w-[1448px] mx-auto w-11/12">
              <div className="grid items-center md:grid-cols-2 text-purple-50">
                <div className="text-center md:text-start">
                  <h1 className="text-3xl font-bold md:text-4xl">
                    <span className={`font-extrabold text-purple-600 relative ${styles.funaabText}`}>FUNAAB</span> DEVs
                    POINT
                  </h1>
                  <p className="my-3 text-sm font-light md:text-base">
                    The New FUNAAB&apos;s portal comes with a pack of new features, such as improved dashboard, faster
                    loading time and more elit. Iusto, quisquam!
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <button
                      className="px-4 py-1 transition bg-yellow-600 rounded-lg hover:bg-yellow-500"
                      onClick={() => {
                        routes.push("/login");
                      }}
                    >
                      Login
                    </button>
                    <Link href={"/signup"}>
                      <button className="px-4 py-1 ml-3 transition border border-purple-600 rounded-lg hover:bg-purple-600">
                        <span>Join Us</span> <i className="ri-rocket-2-line"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* <div className="overflow-hidden border rounded-full border-cyan-500">
                    <Image src="/images/others/meet-friends.png" alt="Meet friend cover image" width={500} height={500} />
                  </div> */}
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
