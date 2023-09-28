import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import "../index.css";

export const PlaceHolderGrey = ({ property1, className, text }) => {
  return (
    <div className={`PlaceHolderGrey ${className}`}>
      <div className={`text-wrapper B1-M ${property1}`}>{text}</div>
    </div>
  );
};

PlaceHolderGrey.propTypes = {
  property1: PropTypes.oneOf(["filled", "default"]),
};
