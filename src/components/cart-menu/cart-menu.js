import React from 'react';
import './cart-menu.css';
import { calcTotalPrice } from '../utils';
import { Button } from '../button';

export const CartMenu = ({ items, onClick }) => {
   return (
      <div className="cart-menu">
         <div className="cart-menu-games-list">
            {
               items.length > 0 ? items.map(game => game.title) : 'Empty cart'
            }
         </div>
         {
            items.length > 0 ?
               <div className="cart-menu-arrange">
                  <div className="cart-menu-total-price">
                     <span>Total price: </span>
                     <span>{calcTotalPrice(items)}$</span>
                  </div>
                  <Button type="primary" size="m" onClick={onClick}>
                     Order
                  </Button>
               </div>
            : null
         }
      </div>
   )
}