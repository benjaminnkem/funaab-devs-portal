import { useEffect, useRef } from "react";
import Head from "next/head";
import {
  Chart as ChartJs,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Bar, Line } from "react-chartjs-2";

import dashStyles from "./styles/Dashboard.module.css";
import Image from "next/image";
import Link from "next/link";

ChartJs.register(LineElement, Title, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement);

const PortalDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      { data: [10, 120, 76, 90, 23, 10, 40, 31, 44, 10, 20, 92] },
      { data: [46, 12, 20, 90, 132, 59, 77, 20, 56, 33, 45, 9] },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.2,
        borderWidth: 1,
        borderColor: "rgb(2,147,64)",
        fill: "start",
        backgroundColor: "rgb(2,147,64,.3)",
      },
    },
    scales: {
      xAxis: { display: false },
      yAxis: { display: false },
    },
  };

  return (
    <>
      <Head>
        <title>Benjamin Nkem - Dashboard @FUNAAB</title>
        <meta name="description" content="Your Dashboard" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="absolute top-0 left-0 w-full h-full bg-green-50">
        <div className={dashStyles.layout}>
          <div className="h-full overflow-x-hidden bg-slate-800">
            <div className="flex items-center px-2 py-2 space-x-1 text-slate-50">
              <Image src="/images/logos/logo.png" alt="FUNAAB's Logo" width={100} height={100}></Image>
              <p className="text-base font-semibold md:text-lg">PORTAL</p>
            </div>
            <div className="space-y-3">
              <div className="mt-4 text-slate-50">
                <h2 className="px-3 py-2 font-semibold cursor-pointer">ACTIONS</h2>
                <ul className="text-sm">
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Course Registration</li>
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Result</li>
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Payment</li>
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Free Internet Data</li>
                </ul>
              </div>
              <div className="mt-4 text-slate-50">
                <h2 className="px-3 py-2 font-semibold cursor-pointer">MORE ACTIONS</h2>
                <ul className="text-sm">
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Chat with Students</li>
                  <li className="px-3 py-2 transition cursor-pointer hover:bg-slate-700">Log Out</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={dashStyles.dashContent}>
            <div id="nav_" className="flex items-center justify-between px-6 py-4 shadow-md">
              <h1 className="md:text-xl">Dashboard</h1>

              <ul className="flex items-center space-x-4 text-lg text-slate-800 md:text-xl">
                <li>
                  <Link href={"/"}>
                    <i className="ri-home-3-line"></i>
                  </Link>
                </li>
                <li>
                  <i className="ri-moon-line"></i>
                </li>
                <li>
                  <i className="text-blue-600 ri-user-fill"></i>
                </li>
                <li>
                  <i className="ri-notification-4-fill"></i>
                </li>
                <li>
                  <i className="ri-logout-box-r-line"></i>
                </li>
              </ul>
            </div>

            <div>
              <section className={dashStyles.statGrid}>
                <div className="bg-white rounded-md shadow-md">
                  <h2 className="px-5 py-3 text-lg font-semibold border-l-2 rounded-tl-md text-slate-700 border-slate-600">
                    THIS YEAR ACTIVITY
                  </h2>
                  <div className="px-5 pt-2 pb-5 overflow-hidden ">
                    <Chart type="line" data={data} options={options}></Chart>
                  </div>
                </div>
                <div className="self-start px-5 py-10 mt-5 transition rounded-md shadow-md text-slate-100 bg-slate-700 hover:shadow-xl md:mt-0">
                  <div className="space-y-3">
                    <div>
                      <Image
                        src="/images/users/me.jpg"
                        alt="User Picture"
                        width={140}
                        height={140}
                        className="mx-auto border-4 rounded-full border-cyan-700"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Your Outstanding Fee</h3>
                      <p className="font-light">N83,000</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Department</h3>
                      <p className="font-light">Computer Science</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalDashboard;
