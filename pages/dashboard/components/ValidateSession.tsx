import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useValidateUserSession = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return null;
};

export default useValidateUserSession;
