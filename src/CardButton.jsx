import React from "react";
import { Link } from "react-router-dom";

const CardButton = ({ backgroundColor, cardButton }) => {
  alert("FIX BROWSE JOB BUTTON reflecting in nav when click //Carbutton.jsx");
  const buttonColor = {
    backgroundColor: backgroundColor || "rgb(212, 74, 0)",
  };
  return (
    <Link to="/joblisting">
      <button style={buttonColor} className="Browse-button">
        {cardButton || "Add Job"}
      </button>
    </Link>
  );
};

export default CardButton;
