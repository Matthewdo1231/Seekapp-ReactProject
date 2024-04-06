import React from "react";
import JobPreview from "./JobPreview.jsx";
import JobFullDescription from "./JobFullDescription";
import "./styles/JobListing.css";
const JobListings = () => {
  return (
    <div className="JoblistingContainer">
      <JobPreview />
      <JobFullDescription />
    </div>
  );
};

export default JobListings;
