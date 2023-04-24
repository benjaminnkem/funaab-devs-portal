import useSWR from "swr";

const TestWSR = () => {
  async function fetcher() {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  }
  
  const { data, err } = useSWR("test", fetcher);

  return (
    <>
      {err && <p>An error occurred</p>}
      <div className="grid w-3/5 grid-cols-3 gap-4 mx-auto">
      {data &&
        data.map((user) => (
          <div key={user.id} className="p-2 my-2 rounded-md shadow-md">
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
