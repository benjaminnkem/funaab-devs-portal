import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  return (
    <div>
      <h1>Blog details - {blogId}</h1>
    </div>
  );
};

export default BlogDetail;
