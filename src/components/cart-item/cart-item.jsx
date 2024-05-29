import React from 'react';
import './cart-item.css';

export const CartItem = ({ title, price }) => {
   return (
      <div className="cart-item">
         <span>{ title }</span>
         <div className="cart-item-price">
            <span>{ price }$</span>
         </div>
      </div>
   );
};