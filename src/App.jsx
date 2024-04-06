import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import HomeCards from "./HomeCards.jsx";
import RecentJobs from "./RecentJobs.jsx";
import ViewAllJobs from "./ViewAllJobs.jsx";
import JobListings from "./JobListings.jsx";

const App = () => {
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

export default App;
