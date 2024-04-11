import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const JobsNav = ({ currentPage }) => {
  return (
    <Link to="/joblisting">
      <button
        className={currentPage == "JoblistingPage" ? "NavToggled" : "JobsNav"}
      >
        Jobs
      </button>
    </Link>
  );
};

export default JobsNav;
