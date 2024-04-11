import React from "react";
import Hero from "../Hero.jsx";
import HomeCards from "../HomeCards.jsx";
import RecentJobs from "../RecentJobs.jsx";
import ViewAllJobs from "../ViewAllJobs.jsx";
import JobListings from "../JobListings.jsx";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <RecentJobs />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
