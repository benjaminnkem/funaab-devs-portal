import DashNavbar from "../pages/dashboard/components/DashNavbar";
import SidePanelLinks from "../pages/dashboard/components/SidePanelLinks";
import Head from "next/head";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <div className="grid h-full dark:bg-gray-900 bg-slate-100 text-gray-800 dark:text-gray-100">
          <SidePanelLinks />
          <div className="lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">
            <DashNavbar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
