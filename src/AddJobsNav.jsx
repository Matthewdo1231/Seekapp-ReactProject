import React from "react";
import { Link } from "react-router-dom";

const AddJobsNav = ({ currentNav }) => {
  return (
    <Link to="/404">
      <button className={"AddJobsNav"}>Add Job</button>
    </Link>
  );
};

export default AddJobsNav;
