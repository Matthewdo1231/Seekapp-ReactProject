import React from "react";

const CardButton = ({ backgroundColor }) => {
  const buttonColor = {
    backgroundColor: backgroundColor || "rgb(212, 74, 0)",
  };
  console.log(buttonColor);
  return (
    <button style={buttonColor} className="Browse-button">
      Browse Jobs
    </button>
  );
};

export default CardButton;
