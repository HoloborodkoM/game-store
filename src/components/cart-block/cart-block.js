import React from 'react';
import './cart-block.css';
import { IoCartOutline } from "react-icons/io5";

export const CartBlock = () => {
   return (
      <div className="cart-block">
         <IoCartOutline size={25} className="cart-block-icon"/>
         <span className="cart-block-total-price">233$</span>
      </div>
   )
} 