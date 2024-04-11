import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/RightNavBars.css";

const HomeNav = () => {
  return (
    <NavLink to="/" className="Navlink">
      Home
    </NavLink>
  );
};

export default HomeNav;
