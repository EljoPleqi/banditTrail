import React from 'react';
import { useDispatch } from 'react-redux';
import { setAddToCart } from '../../features/cart';
import { setNotification } from '../../features/notifications';
import { useSelector } from 'react-redux';

import { ShoppingCartIcon } from '@heroicons/react/outline';

const AddToCartButton = ({ product, setShowNotification }) => {
  const cart = useSelector((state) => state.cart);
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const addToCart = () => {
    if (cart.includes(product)) {
      return console.log('product already in cart');
    } else {
      if (login) {
        dispatch(setAddToCart(product));
        dispatch(setNotification(true));
        setTimeout(() => {
          dispatch(setNotification(false));
        }, 3000);
      } else {
        alert('Please Login');
      }
    }
  };

  return (
    <div>
      <button
        className=" hover:bg-banditYellow-600 active:bg-banditYellow-800 flex gap-2 place-self-center border-2 border-black px-8 py-3
"
        onClick={addToCart}
      >
        <ShoppingCartIcon className="h-6 w-6" /> Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
