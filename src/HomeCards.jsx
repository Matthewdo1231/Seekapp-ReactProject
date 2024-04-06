import React, { Children } from "react";
import Card from "./Card.jsx";
import "./styles/HomeCards.css";
import "./styles/Card.css";
import CardButton from "./CardButton.jsx";
import "./styles/CardButton.css";

const HomeCards = () => {
  return (
    <section className="HomeCards-Section">
      <div className="HomeCards-Container">
        <Card backgroundColor="rgb(240, 240, 240)">
          <h2 className="Titles">For Developers</h2>
          <p className="Description">
            Browse our React jobs and start your career today
          </p>
          <CardButton backgroundColor="rgb(60, 60, 60)" />
        </Card>
        <Card>
          <h2 className="Titles">For Employers</h2>
          <p className="Description">
            List your job to find the perfect developer for the role
          </p>
          <CardButton />
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
