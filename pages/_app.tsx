import "../styles/globals.css";
import "../styles/nprogress.min.css";
import "../styles/navbar.css";
import { SessionProvider } from "next-auth/react";
import "remixicon/fonts/remixicon.css";
import DetectRouteChange from "@/components/ui/route-change-indicator";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider>
      <DetectRouteChange />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
