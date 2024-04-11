import React from "react";
import { Link } from "react-router-dom";
const HomeNav = ({ currentPage }) => {
  return (
    <Link to="/">
      <button className={currentPage == "HomePage" ? "NavToggled" : "HomeNav"}>
        Home
      </button>
    </Link>
  );
};

export default HomeNav;
