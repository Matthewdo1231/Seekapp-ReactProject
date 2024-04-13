import React from "react";
import { BarLoader } from "react-spinners";

const barLoaderStyle = {
  backgroundColor: "rgb(234, 141, 92)",
  opacity: ".1",
  borderRadius: ".5rem",
};

const BarloaderSmall = ({ loading }) => {
  return (
    <BarLoader
      color="rgb(212, 74, 0)"
      height={"1rem"}
      width={"20rem"}
      speedMultiplier={"2"}
      loading={loading}
      cssOverride={barLoaderStyle}
    />
  );
};

export default BarloaderSmall;
