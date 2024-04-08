import React from "react";
import "./styles/JobPreview.css";
import jobs from "../jobs.json";

const JobPreview = () => {
  return (
    <>
      {jobs.map((jobObject, index) => {
        return (
          <article className="JobPreviewContainer" key={index}>
            {Object.keys(jobObject).map((prop, index) => {
              if (prop === "perksAndBenefits" && jobObject[prop] != "") {
                return (
                  <ul className={prop} key={index}>
                    {jobObject[prop].map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                );
              } else {
                return (
                  <div className={prop} key={index}>
                    {jobObject[prop]}
                  </div>
                );
              }
            })}
          </article>
        );
      })}
    </>
  );
};

export default JobPreview;
