import React from "react";
import { useState } from "react";

import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

import Card from "../shared/Card";

function FeedbackItem({ id, rating, text }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        className="close"
        onClick={() => {
          handleClick(id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
