import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-3 gap-4 w-3/5 mx-auto">
      {users &&
        users.map((user) => (
          <div key={user.id} className="my-2 shadow-md p-2 rounded-md">
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
