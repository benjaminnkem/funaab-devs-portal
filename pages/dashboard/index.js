import DashboardLayout from "@/components/DashboardLayout";
import CurrentTimeDisplay from "./components/TimeDisplay";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

const DashboardHome = () => {
  const { data: session, status } = useSession();

  if (!session && status === "unauthenticated") {
    signIn();
  }

  const username = session.user.name;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Dashboard - {username}</title>
      </Head>
      <div className="px-10 py-20 bg-gray-200 dark:bg-gray-800">
        <h2 className="font-semibold">Welcome Back, {username} 👋</h2>
        <CurrentTimeDisplay />
      </div>

      <div className="px-4 mt-10 main-dash-side md:px-10 sm:px-6">
        <div className="grid gap-2 px-5 -mt-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="px-8 py-6 duration-200 bg-green-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-green-500 hover:cursor-pointer">
            <div className="flex flex-col justify-between h-full space-y-4">
              <h3 className="font-semibold">Customers</h3>
              <div className="flex items-center justify-between text-2xl">
                <i className="ri-user-5-fill"></i>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-6 duration-200 bg-gray-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-gray-500 hover:cursor-pointer">
            <div className="flex flex-col justify-between h-full space-y-4">
              <h3 className="font-semibold">Orders</h3>
              <div className="flex items-center justify-between text-2xl">
                <i className="ri-shopping-cart-fill"></i>
                <p>114</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-6 duration-200 bg-red-600 rounded-md shadow-md select-none hover:shadow-2xl text-green-50 hover:bg-red-500 hover:cursor-pointer">
            <div className="flex flex-col justify-between h-full space-y-4">
              <h3 className="font-semibold">Users</h3>
              <div className="flex items-center justify-between text-2xl">
                <i className="ri-user-2-line"></i>
                <p>1.2k</p>
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
            <h3 className="text-xl font-semibold">Stock Statistics</h3>
            <p>Coming Soon.</p>
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
