import React, { useState } from 'react';
import './cart-block.css';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../utils';
import { CartMenu } from '../cart-menu';
import { CartItems } from '../cart-items';

export const CartBlock = () => {
   const items = useSelector((state) => state.cart.itemsInCart);
   const totalPrice = calcTotalPrice(items);
   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

   return (
      <div className="cart-block">
         <CartItems quantity={items.length}/>
         <IoCartOutline 
            size={25} 
            className="cart-block-icon" 
            onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
         />
         { totalPrice > 0 ? <span className="cart-block-total-price">{ totalPrice }$</span> : null }
         { isCartMenuVisible && <CartMenu items={items} onClick={() => null}/> }
      </div>
   )
}