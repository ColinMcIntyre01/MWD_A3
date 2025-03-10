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


}

export default App;
