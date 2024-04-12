import React from "react";
import Hero from "../Hero.jsx";
import HomeCards from "../HomeCards.jsx";
import RecentJobs from "../RecentJobs.jsx";
import ViewAllJobs from "../ViewAllJobs.jsx";
import JobListings from "../JobListings.jsx";
import Spinner from "../Spinner.jsx";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <RecentJobs />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
