import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbacks, handleDelete }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => {
          return (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={feedback.id}
                id={feedback.id}
                rating={feedback.rating}
                text={feedback.text}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
