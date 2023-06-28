import "@/styles/globals.css";
import "@/styles/navbar.css";
import { SessionProvider } from "next-auth/react";

import "remixicon/fonts/remixicon.css";
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
