import React from "react";
import "./styles/JobPreview.css";
import JobPreviewContent from "./JobPreviewContent.jsx";
import JobPreviewLoading from "./JobPreviewLoading.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const JobPreview = ({ articleHighlighted, setToggleHighlight, isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    setTimeout(() => {
      async function fetchJob() {
        try {
          const res = await fetch("http://localhost:8000/jobs");
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.log("Error fetching data", error);
        } finally {
          setLoading(false);
        }
      }
      fetchJob();
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <JobPreviewLoading loading={true} isHome={isHome} />
      ) : (
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
                <JobPreviewContent jobObject={jobObject} />
                {isHome ? (
                  <Link to={`/joblisting/${jobObject.id}`}>
                    See full description
                  </Link>
                ) : null}
              </article>
            );
          })}
        </>
      )}
    </>
  );
};

export default JobPreview;
