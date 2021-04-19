import React from "react";
import "./Home_card.css";


function Home_card({ top , title , content }) {
  return (
    <div className="home_card">
      <div className="home_card__top">{top}</div>
      <div className="home_card__title">{title}</div>
      <div className="home_card__content">{content}</div>
    </div>
  );
}

export default Home_card;

