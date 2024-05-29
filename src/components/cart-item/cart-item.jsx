import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from '../../store/cart/reducer';
import './cart-item.css';

export const CartItem = ({ title, price, id }) => {
   const dispatch = useDispatch();

   const handleDeleteClick = () => {
      dispatch(deleteItemFromCart(id));
   };

   return (
      <div className="cart-item">
         <span>{ title }</span>
         <div className="cart-item-price">
            <span>{ price }$</span>
            <AiOutlineCloseCircle
               size={15}
               className="cart-item-delete-icon"
               onClick={handleDeleteClick}
            />
         </div>
      </div>
   );
};