import React from 'react';
import './game-buy.css';
import { Button } from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../store/cart/reducer';

export const GameBuy = ({ game }) => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.cart.itemsInCart);
   const isItemInCart = items.some((item) => item.id === game.id);

   const handleClick = (event) => {
      event.stopPropagation();
      
      if (isItemInCart) {
        dispatch(deleteItemFromCart(game.id));
      } else {
        dispatch(setItemInCart(game));
      }
    };

   return (
      <div className="game-buy">
         <span className="game-buy-price">{game.price} $</span>
         <Button
            type={isItemInCart ? "secondary" : "primary" }
            onClick={handleClick}
         >
            {isItemInCart ? 'Delete from cart' : 'Add to cart'}
         </Button>
      </div>
   );
}