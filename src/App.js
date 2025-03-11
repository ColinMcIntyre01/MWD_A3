import React, { useState } from "react";
import Deck from "./Components/Deck";
import Controls from "./Components/Controls";
import './App.css';

const suits = ["♥", "♦", "♣", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createDeck = () => {
  return suits.flatMap((suit) => values.map((value) => ({ suit, value })));
};

const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];  
  }
  return shuffled;
};

function App() {

  const [deck, setDeck] = useState(createDeck());
  const [drawnCards, setDrawnCards] = useState([]); 
  const [pickedCard, setPickedCard] = useState(null);


  const handleDeal = (n) => {
    if (n > deck.length) {
      alert("OUT OF CARDS!");
      return;
    }
  
    if (drawnCards.length + n > 52) {
      alert("Cannot draw more than 52 cards!");
      return;
    }
  
    const shuffledDeck = shuffleDeck(deck);
    const newDrawnCards = shuffledDeck.slice(0, n);
    const remainingDeck = shuffledDeck.slice(n);
  
    setDeck(remainingDeck);
    setDrawnCards([...drawnCards, ...newDrawnCards]);
  };
  
  const handleReset = () => {
    setDeck(createDeck());
    setDrawnCards([]);
    setPickedCard(null);
  };
  
  const handleToss = () => {
    if (pickedCard) {
      setDrawnCards(drawnCards.filter((c) => c !== pickedCard));
      setPickedCard(null);
    }
  };
  
  const handleWildcard = () => {
    if (drawnCards.length >= 52) {
      alert("Cannot add more than 52 cards!");
      return;
    }
  
    let randomCard;
    do {
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      randomCard = { suit: randomSuit, value: randomValue };
    } while (drawnCards.some(c => c.suit === randomCard.suit && c.value === randomCard.value));
  
    setDrawnCards([...drawnCards, randomCard]);
  };
  
  const handlePick = (card) => {
    if (pickedCard) {
      const updatedDrawnCards = drawnCards.map((c) =>
        c === pickedCard ? card : c === card ? pickedCard : c
      );
      setDrawnCards(updatedDrawnCards);
      setPickedCard(null);
    } else {
      setPickedCard(card);
    }
  };
  
  const handleRegroup = () => {
    const shuffledDrawnCards = [...drawnCards].sort(() => Math.random() - 0.5);
    setDrawnCards(shuffledDrawnCards);
  };
  return (
    <div className="app">
      <h1>Cards App</h1>
      <Deck deck={deck} drawnCards={drawnCards} onPick={handlePick} pickedCard={pickedCard} />
      <Controls
        deal={handleDeal}
        reset={handleReset}
        toss={handleToss}
        regroup={handleRegroup}
        addWildcard={handleWildcard}
      />
    </div>
  );
}

export default App;
