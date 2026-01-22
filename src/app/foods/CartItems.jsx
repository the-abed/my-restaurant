"use client";
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartItems = () => {
    const {cart} = use(CartContext);
    return (
        <div>
          <h2 className="text-lg font-bold text-center py-2">{cart.length} Items added</h2>  
        </div>
    );
};

export default CartItems;