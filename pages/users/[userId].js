import { useRouter } from "next/router";

const UserDetails = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{user.name}</div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { userId: "1" },
      },
      {
        params: { userId: "2" },
      },
      {
        params: { userId: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:8000/users/${params.userId}`);
    const data = await res.json();

    if (!data.id) {
      return { notFound: true };
    }

    return {
      props: {
        user: data,
      },
    };
  } catch (e) {
    return {
      props: {
        user: [],
      },
    };
  }
}

export default UserDetails;
