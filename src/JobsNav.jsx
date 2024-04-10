import React from "react";
import { Link } from "react-router-dom";

const JobsNav = ({ currentNav }) => {
  return (
    <Link to="/joblisting">
      <button className={"JobsNav"}>Jobs</button>
    </Link>
  );
};

export default JobsNav;
