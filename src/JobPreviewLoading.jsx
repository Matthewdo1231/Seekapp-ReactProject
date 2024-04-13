import React from "react";
import BarloaderSmall from "./barloaders/BarloaderSmall";
import BarloaderMedium from "./barloaders/BarloaderMedium";
import BarloaderLarge from "./barloaders/BarloaderLarge";
import "./styles/JobPreviewLoading.css";

const JobPreviewLoading = ({ loading, isHome }) => {
  return (
    <div className={isHome ? "JoblistContainerHome" : "JoblistContainer"}>
      <div className="JobPreviewListContainer">
        <BarloaderLarge loading={loading} />
        <BarloaderMedium loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
      </div>
      <div className="JobPreviewListContainer">
        <BarloaderLarge loading={loading} />
        <BarloaderMedium loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
      </div>
      <div className="JobPreviewListContainer">
        <BarloaderLarge loading={loading} />
        <BarloaderMedium loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
        <BarloaderSmall loading={loading} />
      </div>
    </div>
  );
};

export default JobPreviewLoading;
