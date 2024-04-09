import React from "react";
import { Link } from "react-router-dom";

const JobsNav = ({ currentNav, setNav, prevNav }) => {
  return (
    <Link to="/joblisting">
      <button
        onClick={() =>
          setNav((newNav) => {
            prevNav = "JobsNav";
            return (newNav = "Jobs");
          })
        }
        className={currentNav == "Jobs" ? "NavToggled" : "JobsNav"}
      >
        Jobs
      </button>
    </Link>
  );
};

export default JobsNav;
