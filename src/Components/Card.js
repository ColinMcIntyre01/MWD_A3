//"StAuth10244: I Colin Mcintyre, 000914071 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

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
