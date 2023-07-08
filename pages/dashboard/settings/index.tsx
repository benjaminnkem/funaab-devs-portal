import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./settings.module.css";
import AccountDisplay from "./components/AccountDisplay";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Settings = () => {
  const { data: session, status } = useSession();
  const [currentTab, setCurrentTab] = useState("");

  const router = useRouter();
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
          <div className={`mt-10  overflow-hidden mx-5 max-w-5xl`}>
            <div className="flex space-x-5 justify-center font-semibold mb-4">
              <Link href={"/dashboard/settings?tab=profile"}>
                <p className="py-1 border-purple-700 border-b-2">Profile</p>
              </Link>
              <Link href={"/dashboard/settings?tab=settings"}>
                <p className="py-1">Settings</p>
              </Link>
              <Link href={"/dashboard/settings?tab=update"}>
                <p className="py-1">Update</p>
              </Link>
            </div>

            <AccountDisplay />
          </div>
        </div>
      </>
    );
  }
};

Settings.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   console.log(context);

//   return {
//     props: [],
//   };
// };

export default Settings;
