import React from 'react';
import './game-buy.css';
import { Button } from '../button';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../store/cart/reducer';

export const GameBuy = ({ game }) => {
   const dispatch = useDispatch();

   const handleClick = (event) => {
      event.stopPropagation();
      dispatch(setItemInCart(game));   
   };

   return (
      <div className="game-buy">
         <span className="game-buy-price">{game.price} $</span>
         <Button
            type="primary"
            onClick={handleClick}
         >
            Add to cart
         </Button>
      </div>
   )
} 