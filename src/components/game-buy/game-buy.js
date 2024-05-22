import React from 'react';
import './game-buy.css';
import { Button } from '../button';

export const GameBuy = ({ game }) => {
   return (
      <div className="game-buy">
         <span className="game-buy-price">{game.price} $</span>
         <Button
            type="primary"
            onClick={ () => null }
         >
            Add to cart
         </Button>
      </div>
   )
} 