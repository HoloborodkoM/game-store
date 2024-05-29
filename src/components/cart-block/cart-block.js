import React from 'react';
import './cart-block.css';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../utils';

export const CartBlock = () => {
   const items = useSelector((state) => state.cart.itemsInCart);
   const totalPrice = calcTotalPrice(items);
   
   return (
      <div className="cart-block">
         <IoCartOutline size={25} className="cart-block-icon"/>
         <span className="cart-block-total-price">{ totalPrice }$</span>
      </div>
   )
}