import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="rgb(212, 74, 0)"
      size={150}
      thickness={1}
      loading={loading}
    />
  );
};

export default Spinner;
