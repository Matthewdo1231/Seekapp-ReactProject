import React from "react";
import JobPreview from "./JobPreview";
import "./styles/JobPreviewList.css";

const JobPreviewList = ({ articleHighlighted, setToggleHighlight, isHome }) => {
  return (
    <div
      className={
        isHome ? "JobPreviewListContainerHome" : "JobPreviewListContainer"
      }
    >
      <JobPreview
        articleHighlighted={articleHighlighted}
        setToggleHighlight={setToggleHighlight}
      />
    </div>
  );
};

export default JobPreviewList;
