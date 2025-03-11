import React from "react";
import "./Card.css";

const Card = ({ suit, value, isPicked, onClick }) => {
  const suitColor = suit === "♥" || suit === "♦" ? "red" : "black";

  return (
    <div
      className={`card ${isPicked ? "picked" : ""}`}
      onClick={onClick}
      onKeyPress={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex="0"
    >
      <span className="card-value">{value}</span>
      <span className="card-suit" style={{ color: suitColor }}>{suit}</span>
    </div>
  );
};

export default Card;
