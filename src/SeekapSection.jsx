import React from "react";
import SeekapLogo from "./assets/images/SeekAppLogo.png";
import "./styles/SeekapSection.css";

const SeekapSection = () => {
  return (
    <>
      <section>
        <img className="SeekapLogo" src={SeekapLogo} />
      </section>
      <section className="SiteNameFontBox">
        <p className="SiteNameFont">Seekapp</p>
      </section>
    </>
  );
};

export default SeekapSection;
