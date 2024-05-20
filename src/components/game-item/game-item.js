import React from 'react';
import './game-item.css';

export const GameItem = ({ game }) => {
   return (
      <div className="game-item">
         <div className="game-item-details">
            <span className="game-item-title">{game.title}</span>
            <div className="game-item-genre">
               {
                  game.genres.map(genre => genre)
               }
            </div>
            <div className="game-item-buy">Buy</div>
         </div>
      </div>
   )
}