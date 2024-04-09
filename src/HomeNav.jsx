import React from "react";
import { Link } from "react-router-dom";

const HomeNav = ({ currentNav, setNav, prevNav }) => {
  return (
    <Link to="/">
      <button
        onClick={() =>
          setNav((newNav) => {
            prevNav = "Home";
            return (newNav = "Home");
          })
        }
        className={currentNav == "Home" ? "NavToggled" : "HomeNav"}
      >
        Home
      </button>
    </Link>
  );
};

export default HomeNav;
