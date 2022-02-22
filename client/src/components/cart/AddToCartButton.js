import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAddToCart } from '../../features/cart';
import { useSelector } from 'react-redux';

const AddToCartButton = ({ product }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = () => {
    if (cart.includes(product)) {
      return console.log('product already in cart');
    } else {
      dispatch(setAddToCart(product));
    }
  };

  return (
    <div>
      <button
        className="text-l mt-6 rounded-lg bg-neutral-700 px-16 py-4 text-white"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
