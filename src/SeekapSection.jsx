import React from "react";
import SeekapLogo from "./assets/images/SeekAppLogo.png";
import "./styles/SeekapSection.css";
import { Link } from "react-router-dom";

const SeekapSection = (currentNav, setNav) => {
  return (
    <>
      <section>
        <Link
          onClick={() =>
            setNav((prevNav) => {
              return (prevNav = "Home");
            })
          }
          to="/"
        >
          <img className="SeekapLogo" src={SeekapLogo} />
        </Link>
      </section>
      <Link
        onClick={() =>
          setNav((prevNav) => {
            return (prevNav = "Home");
          })
        }
        className="SiteNameFontBox"
        to="/"
      >
        <p className="SiteNameFont">Seekapp</p>
      </Link>
    </>
  );
};

export default SeekapSection;
