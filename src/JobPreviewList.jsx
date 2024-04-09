import React from "react";
import JobPreview from "./JobPreview";
import "./styles/JobPreviewList.css";

const JobPreviewList = ({ articleHighlighted, setToggleHighlight }) => {
  return (
    <div className="JobPreviewListContainer">
      <JobPreview
        articleHighlighted={articleHighlighted}
        setToggleHighlight={setToggleHighlight}
      />
    </div>
  );
};

export default JobPreviewList;
