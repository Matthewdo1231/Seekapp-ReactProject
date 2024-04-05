import React, { Children } from "react";
import Card from "./Card.jsx";
import "./styles/HomeCards.css";

const HomeCards = () => {
  return (
    <section className="HomeCards-Section">
      <div className="HomeCards-Container">
        <Card>
          <p>
            For Developers Browse our React jobs and start your career today
            Browse Jobs For Employers List your job to find the perfect
            developer for the role Recent Jobs View All Jobs
          </p>
        </Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default HomeCards;
