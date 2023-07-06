import DashNavbar from "@/pages/dashboard/components/DashNavbar";
import SidePanelLinks from "@/pages/dashboard/components/SidePanelLinks";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid h-full dark:bg-gray-900 bg-slate-100 text-gray-800 dark:text-gray-100">
        <SidePanelLinks />
        <div className="lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">
          <DashNavbar />
          {children}
        </div>
      </div>
    </>
  );
}
