import React from "react";
import "./styles/JobPreview.css";
import { CiBookmark } from "react-icons/ci";

const JobPreview = ({ articleHighlighted, setToggleHighlight }) => {
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
              articleId == articleHighlighted
                ? "JobPreviewContainerToggled"
                : "JobPreviewContainer"
            }
          >
            {Object.keys(jobObject).map((prop, index) => {
              if (prop === "imageFileLocation" && jobObject[prop] != "") {
                return (
                  <div key={index} className={`${prop}-container`}>
                    <img className={prop} src={jobObject[prop]} />
                    <CiBookmark className={`${prop}-flagicon`} />
                  </div>
                );
              }
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
