import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "../../../components/DashboardLayout";
import styles from "./settings.module.css";
import AccountDisplay from "./components/AccountDisplay";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Settings = () => {
  const { data: session, status } = useSession();
  const [currentTab, setCurrentTab] = useState("");

  const router = useRouter();
  useEffect(() => setCurrentTab(router.query.tab as string), [router.query]);

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "authenticated") {
    const username = session.user.name;
    return (
      <>
        <Head>
          <title>Account - @{username}</title>
        </Head>

        <div className="min-h-screen">
          <div className={`mt-10 rounded-md shadow-md overflow-hidden mx-5 max-w-5xl ${styles.accountContainer}`}>
            <div className="bg-white p-6 border">
              <div className="relative">
                <Image
                  src={session.user.image ? session.user.image : "/images/users/blank-user-profile.png"}
                  alt="Admin Pic"
                  width={90}
                  height={90}
                  title="Profile Image"
                  className="mx-auto rounded-full aspect-square shadow-sm border border-gray-200"
                  draggable="false"
                ></Image>
                <div className="absolute w-5 h-5 bottom-0 bg-[#23f634] rounded-full right-14 border-2 border-[#36ff46]"></div>
              </div>
              <div className="text-center">
                <button className="mt-4 border border-purple-700 rounded text-sm px-2 py-1">Upload Picture</button>
              </div>
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
