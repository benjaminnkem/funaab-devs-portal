import Head from "next/head";
import DashboardLayout from "../../../components/Layouts/Dashboard/DashboardLayout";
import AccountDisplay from "./components/AccountDisplay";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import AccountSettings from "./components/AccountSettings";
import UpdateAccount from "./components/UpdateAccount";
import { GetServerSideProps } from "next";

const Settings = () => {
  const { data: session, status } = useSession();
  const [currentTab, setCurrentTab] = useState("");

  const router = useRouter();
  const pathName = router.asPath;
  useEffect(() => setCurrentTab(router.query.tab as string), [router.query]);

  if (status === "unauthenticated") {
    signIn();
  }

  if (status === "authenticated") {
    const username = session.user.name;
    return (
      <>
        <Head>
          <title>Account - @{username} (Profile)</title>
        </Head>

        <div className="min-h-screen">
          <div className={`mt-8 overflow-hidden mx-5 max-w-5xl`}>
            <div className="flex space-x-5 justify-center font-semibold mb-4">
              <Link href={`/${username}`}>
                <p className={`py-1 duration-200 border-b-2 ${pathName === `/${username}` ? "border-b-purple-700" : ""}`}>
                  Profile
                </p>
              </Link>
              <Link href={"/dashboard/settings?tab=settings"}>
                <p className={`py-1 duration-200 border-b-2 ${currentTab === "settings" ? "border-b-purple-700" : ""}`}>
                  Settings
                </p>
              </Link>
              <Link href={"/dashboard/settings?tab=update"}>
                <p className={`py-1 duration-200 border-b-2 ${currentTab === "update" ? "border-b-purple-700" : ""}`}>
                  Update
                </p>
              </Link>
              <Link href={"/dashboard/settings?tab=notifications"}>
                <p
                  className={`py-1 duration-200 border-b-2 ${
                    currentTab === "notifications" ? "border-b-purple-700" : ""
                  }`}
                >
                  Notifications
                </p>
              </Link>
            </div>

            {/* Tabs */}
            {pathName === `/${username}` && <AccountDisplay />}
            {currentTab === "settings" && <AccountSettings />}
            {currentTab === "update" && <UpdateAccount />}
          </div>
        </div>
      </>
    );
  }
};

Settings.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  return {
    props: { data: [] },
  };
};

export default Settings;
