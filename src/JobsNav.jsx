import React from "react";
import { Link } from "react-router-dom";

const JobsNav = ({ currentNav, setNav }) => {
  return (
    <Link to="/joblisting">
      <button
        onClick={() =>
          setNav((prevNav) => {
            return (prevNav = "Jobs");
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
