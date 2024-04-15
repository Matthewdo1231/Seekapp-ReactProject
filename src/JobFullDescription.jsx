import React from "react";
import "./styles/JobFullDescription.css";

const JobFullDescription = ({ articleHighlighted }) => {
  const id = articleHighlighted.substring(8, 9);

  return (
    <div className="JobFullDescriptionContainer">{articleHighlighted}</div>
  );
};

export default JobFullDescription;
