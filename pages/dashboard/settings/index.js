import DashboardLayout from "@/components/DashboardLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

const Settings = () => {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");

  if (!session && status === "unauthenticated") {
    signIn();
  }

  useEffect(() => {
    if (session) setUsername(session.user.name);
  }, [session]);

  return (
    <>
      <Head>
        <title>Settings - {username}</title>
      </Head>
      <div>setting</div>
    </>
  );
};

Settings.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Settings;
