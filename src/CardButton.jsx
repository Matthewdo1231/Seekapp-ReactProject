import React from "react";

const CardButton = ({ backgroundColor, cardButton }) => {
  const buttonColor = {
    backgroundColor: backgroundColor || "rgb(212, 74, 0)",
  };
  return (
    <button style={buttonColor} className="Browse-button">
      {cardButton || "Add Job"}
    </button>
  );
};

export default CardButton;
