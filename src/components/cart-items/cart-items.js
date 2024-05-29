import React from 'react';
import './cart-items.css';

export const CartItems = ({ quantity = 0 }) => {
   return quantity > 0 ? (
      <div className="cart-items">
         { quantity }
      </div>
   ) : null
}