import React from "react";
import "./styles/Header.css";
import NavBar from "./NavBar.jsx";

const Header = ({ currentPage }) => {
  return (
    <div className="header">
      <NavBar currentPage={currentPage} />
    </div>
  );
};

export default Header;
