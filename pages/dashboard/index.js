import DashboardLayout from "@/components/DashboardLayout";
import CurrentTimeDisplay from "./components/TimeDisplay";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const DashboardHome = () => {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");

  // using this approach makes the file for shorter (- using .map())
  const [actionsList, setActionsList] = useState([
    { title: "Fresh Students", description: "Bio Data, Medical & Other Details", img: "/svgs/receipt.svg", url: "" },
    { title: "Matriculation Oath", description: "Upload", img: "/svgs/correction.svg", url: "" },
    { title: "Fresh Students", description: "Print counseling and Bio data form", img: "/svgs/receipt.svg", url: "" },
    { title: "Course Registration", description: "Fresh and Returning Students", img: "/svgs/receipt.svg", url: "" },
    { title: "Examination Pass", description: "All Students", img: "/svgs/receipt.svg", url: "" },
    { title: "Course Rectification", description: "Application Form", img: "/svgs/correction.svg", url: "" },
    { title: "School Fees", description: "Fresh and Returning Students", img: "/svgs/printing.svg", url: "" },
    { title: "Learning Room", description: "Join A general community", img: "/svgs/message.svg", url: "" },
    { title: "Hostel Accommodation", description: "All Students", img: "/svgs/hostel.svg", url: "" },
    { title: "Portal Login", description: "Students", img: "/svgs/receipt.svg", url: "" },
    { title: "Receipt", description: "All Students", img: "/svgs/printing.svg", url: "" },
  ]);

  if (!session && status === "unauthenticated") {
    signIn();
  }

  useEffect(() => {
    if (session) setUsername(session.user.name);
  }, [session]);

  return (
    <>
      <Head>
        <title>Dashboard - {username}</title>
      </Head>
      <div className="px-10 py-20 bg-gray-200 dark:bg-gray-800">
        <h2 className="font-semibold">Welcome Back, {username} 👋</h2>
        <CurrentTimeDisplay />
      </div>

      <div className="px-4 my-10 main-dash-side md:px-6">
        <div className="mb-10 space-y-4">
          <h2 className="text-gray-700 dark:text-gray-300 font-bold md:text-3xl text-xl">Actions</h2>
          <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {actionsList.map((action, index) => (
              <div
                key={index}
                className="px-8 py-6 duration-200 z-10 dark:bg-gray-600 dark:hover:animate-pulse border-2 border-gray-500 relative min-h-[120px] rounded-md shadow-md select-none hover:shadow-lg dark:text-gray-50 text-gray-800 bg-gray-200 hover:cursor-pointer"
              >
                <Image src={action.img} alt="Fresh Student Illustration" width={160} height={160} />
                <div className="absolute top-0 left-0 w-full h-full dark:bg-black bg-white dark:bg-opacity-70 bg-opacity-75 flex items-center px-4">
                  <div>
                    <h3 className="font-bold text-lg">{action.title}</h3>
                    <p className="text-sm font-light">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-gray-700 dark:text-gray-300 font-bold md:text-3xl text-xl mb-5">Your Stats</h2>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-8 py-6 duration-200 bg-green-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-green-500 hover:cursor-pointer">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Friends</h3>
                <div className="flex items-center justify-between text-2xl">
                  <i className="ri-user-5-fill"></i>
                  <p>5.98k</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-6 duration-200 bg-gray-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-gray-500 hover:cursor-pointer">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Payments</h3>
                <div className="flex items-center justify-between text-2xl">
                  <i className="ri-shopping-cart-fill"></i>
                  <p>20</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-6 duration-200 bg-red-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-red-500 hover:cursor-pointer">
              <div className="flex flex-col justify-between h-full space-y-4">
                <h3 className="font-semibold">Groups</h3>
                <div className="flex items-center justify-between text-2xl">
                  <i className="ri-user-2-line"></i>
                  <p>1.2k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 px-5 mt-10 md:grid-cols-2">
          <div className="max-w-5xl p-5 bg-transparent rounded-md shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-bold text-purple-900 dark:text-purple-200">Recent Activities</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center space-x-4">
                <i className="text-lg font-bold text-green-500 ri-check-fill"></i>
                <p>
                  Successfully delivered the product to{" "}
                  <span className="font-semibold text-green-500 border-b border-green-500 cursor-pointer">Davicci</span>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="text-lg font-bold text-yellow-500 ri-truck-line"></i>
                <p>
                  Delivery to{" "}
                  <span className="font-semibold text-yellow-500 border-b border-yellow-500 cursor-pointer">
                    Potler
                  </span>{" "}
                  still Pending
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="text-lg font-bold text-red-500 ri-close-line"></i>
                <p>
                  <span className="font-semibold text-red-500 border-b border-red-500 cursor-pointer">Michael</span>{" "}
                  Cancelled his/her order before delivery
                </p>
              </div>
            </div>
          </div>
          <div className="grid max-w-5xl p-10 text-center bg-transparent rounded-md shadow-md dark:bg-gray-800 place-content-center">
            <h3 className="text-xl font-semibold">Interaction Statistics</h3>
            <p>Coming Soon. 😉</p>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </>
  );
};

DashboardHome.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardHome;
