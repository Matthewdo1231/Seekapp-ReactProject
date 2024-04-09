import React from "react";
import "./styles/JobFullDescription.css";

const JobFullDescription = ({ articleHighlighted }) => {
  return (
    <div className="JobFullDescriptionContainer">{articleHighlighted}</div>
  );
};

export default JobFullDescription;
