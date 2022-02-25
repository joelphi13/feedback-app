import React from "react";

function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];

  const showComments = comments.length > 0 ? true : false;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments ? (
        <div className="comments">
          <h3>Comments: {comments.length}</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        "No comments"
      )}
    </div>
  );
}

export default App;
