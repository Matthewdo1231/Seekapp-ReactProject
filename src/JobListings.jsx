import React from "react";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
import JobPreviewList from "./JobPreviewList.jsx";
import { useState, useEffect } from "react";

const JobListings = () => {
  const [articleHighlighted, setToggleHighlight] = useState("");

  useEffect(() => {
    console.log(articleHighlighted);
    return () => {
      console.log("cleaned up");
    };
  }, [articleHighlighted]);

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
