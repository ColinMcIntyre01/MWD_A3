import React from "react";
import "./Card.css";

const Card = ({ suit, value, isPicked, onClick }) => {

return(

<div className={`card ${isPicked ? "picked" : ""}`} onClick={onClick}>

   <span className="card-value">{value}</span>
   <span className="card-suit">{suit}</span>

</div>
);

};

export default Card;
