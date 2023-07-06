import "./dashboard.css";
import "remixicon/fonts/remixicon.css";
import SidePanelLinks from "./components/SidePanelLinks";
import DashNavbar from "./components/DashNavbar";


export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid h-full">
        <SidePanelLinks />
        <div className="lg:ml-[320px] md:ml-[280px] ml-[80px] duration-200">
          <DashNavbar />
          {children}
        </div>
      </div>
    </>
  );
}
