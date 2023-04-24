import useSWR from "swr";

const TestWSR = () => {
  async function fetcher() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }
  
  const { data, err } = useSWR("test", fetcher);

  return (
    <>
      {err && <p>An error occurred</p>}
      <div className="grid grid-cols-3 gap-4 w-3/5 mx-auto">
      {users &&
        data.map((user) => (
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

export default TestWSR;
