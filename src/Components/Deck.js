import React from "react";
import Card from "./Card";
import "./Deck.css";

const Deck = ({deck, drawnCards, onPick, pickedCard})=>{

return(
<div className="deck-container">
 <div className="deck">
 {deck.length > 0 ? "Deck" : "No cards remaining"}
 </div>
 <div className="drawn-cards">
 {drawnCards.map((card, index) => (
          <Card
            key={index}
            suit={card.suit}
            value={card.value}
            isPicked={pickedCard === card}
            onClick={() => onPick(card)}
          />
        ))}
 </div>
</div>
);



};
export default Deck;
