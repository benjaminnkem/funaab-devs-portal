import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(false);

  async function fetchComments() {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);
  }

  // Comment Handling
  const [commentInput, setCommentInput] = useState("");
  const [commentStatus, setCommentStatus] = useState(false);

  function handleCommentInp(e) {
    setCommentInput(e.target.value);
  }

  async function handlePostComment(e) {
    e.preventDefault();

    if (commentInput === "") return;

    const commentBody = {
      text: commentInput,
    };

    await fetch("http://localhost:8000/comments", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(commentBody),
    });

    setCommentStatus(true);

    setTimeout(() => setCommentStatus(false), 2000);
    console.log("Comment Posted Successfully");
  }

  return (
    <>
      <div className="grid w-3/5 grid-cols-2 gap-3 mx-auto">
        <div>
          <h1>All Comments</h1>
          {err && <p>An error occurred while fetching the comments</p>}

          {comments &&
            comments.map((comment) => (
              <p className="py-3 border-b" key={comment.id}>
                {comment.text}
              </p>
            ))}

          <button className="p-2 bg-yellow-600 text-red-50" onClick={fetchComments}>
            Fetch Comments
          </button>
        </div>
        <div>
          {commentStatus && <p className="px-3 py-2 text-white bg-green-600 rounded-md">Comment Posted Successfully</p>}
          <form method="post" id="commentForm" onSubmit={handlePostComment}>
            <div>
              <label htmlFor="commentInp" className="block">
                Comment Input
              </label>
              <input
                type="text"
                name="commentInp"
                className="p-2 border-b"
                value={commentInput}
                onChange={(e) => handleCommentInp(e)}
              />
            </div>

            <button>Post Comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
