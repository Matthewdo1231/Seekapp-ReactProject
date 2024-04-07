import React from "react";
import "./styles/JobPreview.css";
import jobs from "../jobs.json";

const JobPreview = () => {
  return (
    <>
      {jobs.map((job, index) => {
        return (
          <article className="JobPreviewContainer" key={index}>
            {Object.keys(job).map((prop, index) => {
              return <div key={index}>asdasd</div>;
            })}
          </article>
        );
      })}
    </>
  );
};

export default JobPreview;
