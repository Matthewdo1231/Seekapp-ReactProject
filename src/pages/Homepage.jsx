import React from "react";
import Hero from "../Hero.jsx";
import HomeCards from "../HomeCards.jsx";
import RecentJobs from "../RecentJobs.jsx";
import ViewAllJobs from "../ViewAllJobs.jsx";
import JobListings from "../JobListings.jsx";
import Header from "../Header.jsx";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeCards />
      <RecentJobs />
      <ViewAllJobs />
      <JobListings />
    </>
  );
};

export default Homepage;
