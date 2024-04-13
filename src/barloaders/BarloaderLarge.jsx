import React from "react";
import { BarLoader } from "react-spinners";

const barLoaderStyle = {
  backgroundColor: "rgb(234, 141, 92)",
  opacity: ".1",
  borderRadius: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const BarloaderLarge = ({ loading }) => {
  return (
    <BarLoader
      color="rgb(212, 74, 0)"
      height={"1.5rem"}
      width={"25rem"}
      speedMultiplier={"2"}
      loading={loading}
      cssOverride={barLoaderStyle}
    />
  );
};

export default BarloaderLarge;
