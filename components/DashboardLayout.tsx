import { SessionProvider } from "next-auth/react";
import DashNavbar from "../pages/dashboard/components/DashNavbar";
import SidePanelLinks from "../pages/dashboard/components/SidePanelLinks";
import Head from "next/head";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SessionProvider>
        <main className="dark:bg-gray-900 bg-gray-100 text-gray-800 dark:text-gray-100">
          <div className="grid h-full">
            <SidePanelLinks />
            <div className="lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">
              <DashNavbar />
              {children}
            </div>
          </div>
        </main>
      </SessionProvider>
    </>
  );
}
