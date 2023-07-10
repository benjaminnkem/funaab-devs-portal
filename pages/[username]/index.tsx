import DashboardLayout from "../../components/DashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import AccountDisplay from "../dashboard/settings/components/AccountDisplay";
import AccountSettings from "../dashboard/settings/components/AccountSettings";
import UpdateAccount from "../dashboard/settings/components/UpdateAccount";
import dbConnection from "../../utils/db";
import UserModel from "../../utils/schemas/users/UserModel";
import { UserDataProps } from "../types/UserData.types";

const Profile = ({ userData }: UserDataProps) => {
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
          <div className={`mt-4 overflow-hidden mx-5 max-w-5xl`}>
            <div className="flex space-x-5 justify-center font-semibold mb-4">
              <Link href={`/${username}`}>
                <p
                  className={`py-1 duration-200  border-b-2 ${pathName === `/${username}` ? "border-b-purple-600" : "dark:border-gray-400"}`}
                >
                  Profile
                </p>
              </Link>
              <Link href={`/${username}?tab=settings`}>
                <p className={`py-1 duration-200  border-b-2 ${currentTab === "settings" ? "border-b-purple-600" : "dark:border-gray-400"}`}>
                  Settings
                </p>
              </Link>
              <Link href={`/${username}?tab=update`}>
                <p className={`py-1 duration-200  border-b-2 ${currentTab === "update" ? "border-b-purple-600" : "dark:border-gray-400"}`}>
                  Update
                </p>
              </Link>
              <Link href={`/${username}?tab=notifications`}>
                <p
                  className={`py-1 duration-200  border-b-2 ${
                    currentTab === "notifications" ? "border-b-purple-600" : "dark:border-gray-400"
                  }`}
                >
                  Notifications
                </p>
              </Link>
            </div>

            {/* Tabs */}
            {pathName === `/${username}` && <AccountDisplay userData={userData} />}
            {currentTab === "settings" && <AccountSettings />}
            {currentTab === "update" && <UpdateAccount userData={userData} />}
          </div>
        </div>
      </>
    );
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { username } = params;

  await dbConnection();
  const user = await UserModel.findOne({ username });

  if (!user) {
    return {
      notFound: true,
    };
  }

  const pureUserData: UserDataProps = {
    userData: {
      fullName: user.fullName,
      username: user.username,
      level: user.level,
      colFalc: user.colFalc,
      department: user.department,
      email: user.email,
      phoneNumber: "",
      bio: "",
      dateCreated: new Date(user.dateCreated).toLocaleDateString(),
    },
  }; // You can't send the whole user data since it contains a Date data type.
  return {
    props: {
      userData: pureUserData.userData,
    },
  };
};

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Profile;
