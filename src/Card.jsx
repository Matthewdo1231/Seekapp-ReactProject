import React from "react";
import "./styles/Card.css";

const Card = ({ children, backgroundColor }) => {
  const defaultColor = "rgb(246, 216, 198)";
  const cardBG = {
    backgroundColor: backgroundColor || defaultColor,
  };
  console.log(cardBG);
  return (
    <div style={cardBG} className="Card">
      {children}
    </div>
  );
};

export default Card;
