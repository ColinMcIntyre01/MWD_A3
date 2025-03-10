import React, { useState } from "react";
import Deck from "./components/Deck";
import Controls from "./components/Controls";
import './App.css';

const suits = ["♥", "♦", "♣", "♠"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createDeck = () => {
  return suits.flatMap((suit) => values.map((value) => ({ suit, value })));
};

function App() {
 


}

export default App;
