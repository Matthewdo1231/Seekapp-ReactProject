import React from "react";
import Header from "../Header.jsx";
import JobListings from "../JobListings.jsx";

const JobListingPage = () => {
  return (
    <>
      <Header currentPage={"JoblistingPage"} />
      <JobListings />
    </>
  );
};

export default JobListingPage;
