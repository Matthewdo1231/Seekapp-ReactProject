import React from "react";
import SeekapLogo from "./assets/images/SeekAppLogo.png";
import "./styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <img class="SeekapLogo" src={SeekapLogo} />
    </nav>
  );
};

export default NavBar;
