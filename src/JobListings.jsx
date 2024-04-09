import React from "react";
import JobPreview from "./JobPreview.jsx";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
import JobPreviewList from "./JobPreviewList.jsx";
import { useState } from "react";

const JobListings = () => {
  const [articleHighlighted, setToggleHighlight] = useState("");
  return (
    <div className="JoblistingContainer">
      <JobPreviewList
        articleHighlighted={articleHighlighted}
        setToggleHighlight={setToggleHighlight}
      />
      <JobFullDescription articleHighlighted={articleHighlighted} />
    </div>
  );
};

export default JobListings;
