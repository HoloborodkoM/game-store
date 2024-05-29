import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import { CartMenu } from '../cart-menu';
import { CartItems } from '../cart-items';
import { calcTotalPrice } from '../utils';
import './cart-block.css';

export const CartBlock = () => {
   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
   const items = useSelector((state) => state.cart.itemsInCart);
   const totalPrice = calcTotalPrice(items);

   return (
      <div className="cart-block">
         <CartItems quantity={ items.length }/>
         <IoCartOutline 
            size={ 25 } 
            className="cart-block-icon" 
            onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
         />
         { totalPrice > 0 ? <span className="cart-block-total-price">{ totalPrice }$</span> : null }
         { isCartMenuVisible && <CartMenu items={ items } onClick={() => null}/> }
      </div>
   );
};