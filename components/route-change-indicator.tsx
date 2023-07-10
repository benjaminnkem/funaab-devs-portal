import { useRouter } from "next/router";
import { useEffect } from "react";
import Nprogress from "nprogress";

const DetectRouteChange = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      Nprogress.start();
    });
    router.events.on("routeChangeComplete", () => {
      Nprogress.done();
    });
  }, [router]);

  return null;
};

export default DetectRouteChange;
