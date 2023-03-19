import "@/styles/globals.css";
import "@/styles/navbar.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/js/shared.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
