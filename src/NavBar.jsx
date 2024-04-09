import React from "react";
import "./styles/Navbar.css";
import "./styles/RightNavBars.css";
import SeekapSection from "./SeekapSection.jsx";
import HomeNav from "./HomeNav.jsx";
import JobsNav from "./JobsNav.jsx";
import AddJobsNav from "./AddJobsNav.jsx";

import { useState, useEffect } from "react";

let prevNav = JSON.parse(localStorage.getItem("prevNav"));
const NavBar = () => {
  const [currentNav, setNav] = useState(prevNav || "Home");
  useEffect(() => {
    localStorage.setItem("prevNav", JSON.stringify(currentNav));
  }, [currentNav]);
  return (
    <nav className="Navbar">
      <SeekapSection currentNav={currentNav} setNav={setNav} />
      <section className="RightNavbars">
        <HomeNav currentNav={currentNav} setNav={setNav} prevNav={prevNav} />
        <JobsNav currentNav={currentNav} setNav={setNav} prevNav={prevNav} />
        <AddJobsNav currentNav={currentNav} setNav={setNav} prevNav={prevNav} />
      </section>
    </nav>
  );
};

export default NavBar;
