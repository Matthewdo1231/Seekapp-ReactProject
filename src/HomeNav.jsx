import React from "react";
import { Link } from "react-router-dom";
const HomeNav = () => {
  return (
    <Link to="/">
      <button className={"HomeNav"}>Home</button>
    </Link>
  );
};

export default HomeNav;
