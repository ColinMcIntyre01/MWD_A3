import React from "react";
import "./Card.css";

const Card = ({ suit, value, isPicked, onClick }) => {
   const isRed = suit === "♥" || suit === "♦";

  return (
   <div className={`card ${isPicked ? "picked" : ""} ${isRed ? "red" : ""}`} onClick={onClick}>
     <span className="card-value">{value}</span>
     <span className="card-suit">{suit}</span>
   </div>
 );
};

export default Card;
