import Link from "next/link";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(false);

  async function fetchComments() {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);
  }

  const [commentInput, setCommentInput] = useState("");
  const [commentStatus, setCommentStatus] = useState(false);

  function handleCommentInp(e) {
    setCommentInput(e.target.value);
  }

  async function handlePostComment(e) {
    e.preventDefault();

    if (commentInput === "") return;

    await fetch("/api/comments", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ comment: commentInput }),
    });

    setCommentStatus(true);
    setCommentInput("");
    setTimeout(() => setCommentStatus(false), 2000);
  }

  async function deleteComment(commentId) {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  }

  return (
    <>
      <div className="grid w-3/5 grid-cols-2 gap-4 mx-auto">
        <div>
          <h1 className="text-3xl font-semibold">All Comments</h1>
          {err && <p>An error occurred while fetching the comments</p>}

          {comments &&
            comments.map((comment) => (
              <div
                key={comment.id}
                className="flex justify-between px-3 py-3 my-2 transition rounded-md shadow-md hover:shadow-lg"
              >
                <p>{comment.text}</p>
                <div className="space-x-2">
                  <button onClick={() => deleteComment(comment.id)}>Delete</button>
                  <Link href={`/comments/${comment.id}`} className="text-blue-400">View</Link>
                </div>
              </div>
            ))}

          <button className="p-2 bg-yellow-600 text-red-50" onClick={fetchComments}>
            Fetch Comments
          </button>
        </div>
        <div>
          {commentStatus && <p className="px-3 py-2 text-white bg-green-600 rounded-md">Comment Posted Successfully</p>}
          <form method="post" id="commentForm" onSubmit={handlePostComment}>
            <div>
              <label htmlFor="commentInp" className="block text-3xl font-semibold">
                Post a comment
              </label>
              <input
                type="text"
                name="commentInp"
                className="w-full p-2 border-b"
                value={commentInput}
                onChange={(e) => handleCommentInp(e)}
              />
            </div>

            <button className="w-full py-1 mt-3 text-center bg-yellow-600 rounded-md">Post Comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
