import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  return (
    <div>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}

export default App;
