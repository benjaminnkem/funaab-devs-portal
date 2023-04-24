import { comments } from "@/data/comments";

const CommentDetails = ({ commentDetail }) => {
  return (
    <>
      <div>
        <p>Id: {commentDetail.id}</p>
        <p>Text: {commentDetail.text}</p>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(comment => comment.id = parseInt(commentId));

  return {
    props: {
      commentDetail: comment,
    },
  };
}

export default CommentDetails;
