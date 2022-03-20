import React from 'react';
import axios from 'axios';
import img from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.webp';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import Cart from '../components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { setEmptyCart } from '../features/cart';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkout = () => {
    axios
      .put(' http://localhost:8000/api/products/checkout', cart)
      .then((res) => {
        console.log(res);
        dispatch(setEmptyCart(''));
      });
  };

  //  Calculate Total Price
  let total;
  if (cart.length > 0) {
    total = cart
      .map((item) => item.price)
      .reduce((total, item) => total + item);
  }

  // if (itemPrices.length > 0) {
  //   total = itemPrices.reduce();
  // }
  return (
    <div className="grid-cols-threeTwo lg:grid">
      <div>
        <Cart />
      </div>
      <div
        className={` flex flex-col items-center justify-end lg:h-screen lg:bg-neutral-600 lg:bg-cover lg:text-white lg:bg-blend-overlay`}
      >
        <div className="mb-20 flex  flex-col items-center gap-4 lg:p-12">
          <div className="flex w-96 items-end justify-between gap-4  px-4">
            <div className="flex flex-col ">
              <span className="flex items-center gap-2">
                {' '}
                <ShieldCheckIcon className="h-4 w-4" />
                <p className="text-xs">Secure Checkout</p>{' '}
              </span>
              <h3 className="text-2xl  ">Your Total Is:</h3>
            </div>
            <h3 className="text-4xl ">{total ? total : '0'} US$ </h3>
          </div>

          <div className="flex w-96 flex-col items-center justify-center gap-4">
            <span
              className="text-banditGreen-600 hover:bg-banditGreen-600 active:bg-banditGreen-700
             w-full cursor-pointer rounded-md bg-white py-4 px-8 text-center hover:text-white"
              onClick={checkout}
            >
              Checkout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
