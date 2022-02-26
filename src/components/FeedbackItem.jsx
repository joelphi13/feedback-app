import React from "react";
import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(6);
  const [text, setText] = useState("This is an example of a feedback item");

  const handleClick = () => {
    // setRating(10);
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
    setText("Very good product");
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
