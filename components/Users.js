const User = ({ user }) => {
  return (
    <div key={user.id} className="my-4 p-4 shadow-md rounded-md">
      <p className="text-xl font-semibold py-3">{user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
