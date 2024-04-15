import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const JobsPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return <div>{job.id}</div>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobsPage as default, jobLoader };
