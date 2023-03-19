import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href='/' replace>Home Page</Link>
    </div>
  );
};

export default NotFound;
