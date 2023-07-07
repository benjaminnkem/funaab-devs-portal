import Head from "next/head"
import Link from "next/link";
import Image from "next/image"

const NotFound = () => {
  return (
    <>
    <div>
    <Head>
      <title>Page not found || Funaab Devs</title>
    </Head>
    <Image
      src="/images/others/meet-friends.png"
      width={450}
      height={250}
      alt={"Not found image"}
      className="mx-auto mt-16"
    />
      <h1 className="text-center text-gray-700 text-xl">Sorry.... This page could not be loaded<br/>
      Our engineers are working on it, and will get back to you as soon as possible</h1>
      <p className="text-center text-xl text-gray-700 mt-8 mb-6">Thanks for your understanding</p>
    </div>
    <div className="text-center">
    <Link href='/' replace className="text-violet-700 font-bold text-xl">Back to home</Link>
    </div>
    </>
  );
};

export default NotFound;
