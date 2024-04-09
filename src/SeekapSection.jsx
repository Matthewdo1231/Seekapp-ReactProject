import React from "react";
import SeekapLogo from "./assets/images/SeekAppLogo.png";
import "./styles/SeekapSection.css";
import { Link } from "react-router-dom";

const SeekapSection = () => {
  return (
    <>
      <section>
        <Link to="/">
          <img className="SeekapLogo" src={SeekapLogo} />
        </Link>
      </section>
      <Link className="SiteNameFontBox" to="/">
        <p className="SiteNameFont">Seekapp</p>
      </Link>
    </>
  );
};

export default SeekapSection;
