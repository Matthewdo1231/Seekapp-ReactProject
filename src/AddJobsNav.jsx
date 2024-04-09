import React from "react";
import { Link } from "react-router-dom";

const AddJobsNav = ({ currentNav, setNav, prevNav }) => {
  return (
    <Link to="/404">
      <button
        onClick={() =>
          setNav((newNav) => {
            prevNav = "JobsNav";
            return (newNav = "Add Job");
          })
        }
        className={currentNav == "Add Job" ? "NavToggled" : "AddJobsNav"}
      >
        Add Job
      </button>
    </Link>
  );
};

export default AddJobsNav;
