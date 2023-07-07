import Link from "next/link";

const User = ({ user }) => {
  return (
    <div className="p-4 my-4 rounded-md shadow-md">
      <p className="py-3 text-xl font-semibold">{user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <Link href={`/users/${user.id}`}>
        View  Details
      </Link>
    </div>
  );
};

export default User;
