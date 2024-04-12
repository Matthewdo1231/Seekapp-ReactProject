import React from "react";
import { CiBookmark } from "react-icons/ci";

const JobPreviewContent = ({ jobObject }) => {
  return (
    <>
      {Object.keys(jobObject).map((prop, index) => {
        if (prop == "id") {
          return;
        }
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
    </>
  );
};

export default JobPreviewContent;
