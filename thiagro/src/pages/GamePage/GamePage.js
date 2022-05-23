import React from "react";
import UseProtectPage from "../../hooks/useProtectPage";
import Game from "./Game";
import './styled.css';

const GamePage = () => {

  UseProtectPage()

  return ( 
  <div class="App">
    <h1>Jogo da Velha</h1>
    <Game />
    <body></body>
  </div>
  );
};

export default GamePage