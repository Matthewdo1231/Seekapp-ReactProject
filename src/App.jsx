import React from "react";
import "./App.css";

const App = () => {
  const names = ["Matthew", "Matty", "Mats"];
  const fontStyle = {
    fontSize: "32px",
  };
  return (
    <>
      <div className="wtf">App</div>
      <ul>
        {names.map((name, id) => (
          <li style={fontStyle} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
