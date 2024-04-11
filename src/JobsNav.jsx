import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/RightNavBars.css";

const JobsNav = () => {
  return (
    <NavLink to="/joblisting" className="Navlink">
      Jobs
    </NavLink>
  );
};

export default JobsNav;
