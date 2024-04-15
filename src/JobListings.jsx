import React from "react";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
import JobPreviewList from "./JobPreviewList.jsx";
import { useState } from "react";

const JobListings = ({ isHome }) => {
  const [articleHighlighted, setToggleHighlight] = useState("");

  return (
    <div className="JoblistingContainer">
      <JobPreviewList
        isHome={isHome}
        articleHighlighted={articleHighlighted}
        setToggleHighlight={setToggleHighlight}
      />
      {isHome ? null : (
        <JobFullDescription articleHighlighted={articleHighlighted} />
      )}
    </div>
  );
};

export default JobListings;
