import React from "react";
import "./styles/ViewAllJobsButton.css";
import { useNavigate } from "react-router-dom";

const ViewAllJobs = () => {
  const navigate = useNavigate();

  const routeToJoblisting = () => {
    navigate("/joblisting");
  };

  return (
    <div className="ViewAllJobsButton-Container">
      <button onClick={routeToJoblisting} className="ViewAllJobsButton">
        ViewAllJobs
      </button>
    </div>
  );
};

export default ViewAllJobs;
