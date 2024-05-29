import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GameCover } from '../game-cover/game-cover';
import { deleteItemFromCart } from '../../store/cart/reducer';
import './order-item.css';

export const OrderItem = ({ game }) => {
   const dispatch = useDispatch();

   const handleDeleteClick = () => {
      dispatch(deleteItemFromCart(game.id))
   };

   return (
      <div className="order-item">
         <div className="order-item-cover">
            <GameCover image={ game.image } />
         </div>
         <div className="order-item-title">
            <span> { game.title } </span>
         </div>
         <div className="order-item-price">
            <span>{ game.price } $</span>
            <AiOutlineCloseCircle
               size={25}
               className="cart-item-delete-icon"
               onClick={ handleDeleteClick }
            />
         </div>
      </div>
   );
};