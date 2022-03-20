import React from 'react';
import { useDispatch } from 'react-redux';
import { setAddToCart } from '../../features/cart';
import { setNotification } from '../../features/notifications';
import { useSelector } from 'react-redux';

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
        className="border-banditGreen-600 text-banditGreen-600 hover:bg-banditGreen-600
        active:bg-banditGreen-900 w-full cursor-pointer rounded-md border-2 bg-white py-4 px-8 text-center hover:text-white"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
