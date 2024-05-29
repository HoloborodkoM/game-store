import React from 'react';
import { useSelector} from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice, enumerate } from '../../components/utils';
import './order-page.css';

export const OrderPage = () => {
   const items = useSelector((state) => state.cart.itemsInCart);

   if (items.length < 1) {
      return <h1>Your cart is empty</h1>
   }

   return (
      <div className="order-page">
         <div className="order-page-left">
            { items.map(game => <OrderItem game={game}/>) }
         </div>
         <div className="order-page-right">
            <div className="order-page-total-price">
               <span>{ items.length } 
                  { enumerate(
                     items.length, 
                     ['game', 'games']
                  )} at the rate of { calcTotalPrice(items) }$
               </span>
            </div>
         </div>
      </div>
   );
};