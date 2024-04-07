import React from "react";
import JobPreview from "./JobPreview.jsx";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
import JobPreviewList from "./JobPreviewList.jsx";
const JobListings = () => {
  return (
    <div className="JoblistingContainer">
      <JobPreviewList />
      <JobFullDescription />
    </div>
  );
};

export default JobListings;
