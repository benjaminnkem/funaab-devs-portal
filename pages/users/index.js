function Users({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
