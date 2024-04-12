import React from "react";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
import JobPreviewList from "./JobPreviewList.jsx";
import { useState, useEffect } from "react";

function renderJoblisting(isHome, articleHighlighted) {
  if (isHome) {
    return;
  } else return <JobFullDescription articleHighlighted={articleHighlighted} />;
}

const JobListings = ({ isHome }) => {
  const [articleHighlighted, setToggleHighlight] = useState("");

  return (
    <div className="JoblistingContainer">
      <JobPreviewList
        isHome={isHome}
        articleHighlighted={articleHighlighted}
        setToggleHighlight={setToggleHighlight}
      />
      {renderJoblisting(isHome, articleHighlighted, setToggleHighlight)}
    </div>
  );
};

export default JobListings;
