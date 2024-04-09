import React from "react";
import "./styles/JobPreview.css";
import jobs from "../jobs.json";
import { useState } from "react";

const JobPreview = () => {
  const [toggleHighlight, setToggleHighlight] = useState("article-0");

  return (
    <>
      {jobs.map((jobObject, index) => {
        const articleId = `article-${index}`;
        return (
          <article
            key={index}
            id={articleId}
            onClick={() =>
              setToggleHighlight((prev) => {
                return (prev = articleId);
              })
            }
            className={
              articleId == toggleHighlight
                ? "JobPreviewContainerToggled"
                : "JobPreviewContainer"
            }
          >
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
