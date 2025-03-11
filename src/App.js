import React, { useState } from "react";
import Deck from "./Components/Deck";
import Controls from "./Components/Controls";
import './App.css';

const suits = ["♥", "♦", "♣", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createDeck = () => {
  return suits.flatMap((suit) => values.map((value) => ({ suit, value })));
};

function App() {
 
const [deck, setDeck] = useState(createDeck());
const [drawnCards, setDrawnCards] = useState([]);
const [pickedCard, setPickedCard] = useState(null);


const handleDeal =(n) =>{

const newDeck = createDeck();
setDeck(newDeck);
const newCards = [];
for (let i = 0; i < n; i++) {
  const index = Math.floor(Math.random() * newDeck.length);
  newCards.push(newDeck[index]);
}
setDrawnCards(newCards);
};

const handleReset = () => {

setDeck(createDeck());
setDrawnCards({});
setPickedCard(null);

};

const handlePick = (card) => {
  if (pickedCard) {
    setDrawnCards(drawnCards.map((c) => (c === pickedCard ? card : c === card ? pickedCard : c)));
    setPickedCard(null);
  } else {
    setPickedCard(card);
  }
};



const handleToss = () => {

  if (pickedCard) {
    setDrawnCards(drawnCards.filter((c) => c !== pickedCard));
    setPickedCard(null);
  }
};

const handleRegroup = () => {
  setDrawnCards([...drawnCards].sort(() => Math.random() - 0.5));
};

const handleWildcard = () => {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  setDrawnCards([...drawnCards, { suit: randomSuit, value: randomValue }]);
};

return(
<div className="app">
  <h1>Cards App</h1>
  <Deck deck={deck} drawnCards={drawnCards} onPick={handlePick} pickedCard={pickedCard}/>
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
