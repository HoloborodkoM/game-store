import React from 'react';
import './game-buy.css';

export const GameBuy = ({ game }) => {
   return (
      <div className="game-buy">
         <span className="game-buy-price">{game.price} $</span>
      </div>
   )
} 