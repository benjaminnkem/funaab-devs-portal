import Link from "next/link";
import { useRouter } from "next/router";

const Users = ({ users }) => {
  const routes = useRouter();

  if (routes.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="grid w-3/5 grid-cols-3 gap-4 mx-auto">
        {users &&
          users.map((user) => (
            <div key={user.id} className="p-2 my-2 overflow-hidden rounded-md shadow-md">
              <Link href={`/users/${user.id}`}>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
