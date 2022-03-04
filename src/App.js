import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  handleDelete={deleteFeedback}
                />
              </div>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
}

export default App;
