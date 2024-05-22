import React from 'react';
import './game-item.css';
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';

export const GameItem = ({ game }) => {
   return (
      <div className="game-item">
         <GameCover image={game.image}/>
         <div className="game-item-details">
            <span className="game-item-title">{game.title}</span>
            <div className="game-item-genre">
               {
                  game.genres.map(genre => genre)
               }
            </div>
            <div className="game-item-buy">
               <GameBuy game={game}/>
            </div>
         </div>
      </div>
   )
}