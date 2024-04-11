import React from "react";
import "./styles/Navbar.css";
import "./styles/RightNavBars.css";
import SeekapSection from "./SeekapSection.jsx";
import HomeNav from "./HomeNav.jsx";
import JobsNav from "./JobsNav.jsx";
import AddJobsNav from "./AddJobsNav.jsx";

const NavBar = ({ currentPage }) => {
  console.log(currentPage);
  return (
    <nav className="Navbar">
      <SeekapSection />
      <section className="RightNavbars">
        <HomeNav currentPage={currentPage} />
        <JobsNav currentPage={currentPage} />
        <AddJobsNav currentPage={currentPage} />
      </section>
    </nav>
  );
};

export default NavBar;
