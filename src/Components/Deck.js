import React from "react";

const Deck = ({ deck, drawnCards, onPick, pickedCard }) => {
  return (
    <div className="deck-container">
      {deck.length > 0 && <div className="deck">Deck</div>}

      <div className="drawn-cards">
        {drawnCards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => onPick(card)}
            style={{
              border: pickedCard === card ? "2px solid gold" : "2px solid black",
            }}
          >
            <span className="card-value">{card.value}</span>
            <span className="card-suit">{card.suit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
