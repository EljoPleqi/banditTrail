import React from 'react';
import axios from 'axios';
import img from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';
import { XCircleIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import Cart from '../components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { setEmptyCart } from '../features/cart';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkout = () => {
    axios
      .put('http://127.0.0.1:8000/api/products/checkout', cart)
      .then((res) => {
        console.log(res.data);
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
    <div className="grid-cols-threeTwo grid">
      <div>
        <Cart />
      </div>
      <div
        className=" flex h-screen flex-col items-center justify-end bg-neutral-600 bg-cover text-white  bg-blend-overlay"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mb-20 flex  flex-col items-center gap-4 p-12">
          <div className="flex w-96 items-end justify-between gap-4">
            <div className="flex flex-col">
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
              className="w-full cursor-pointer rounded-md
             bg-white py-4 px-8 text-center text-green-600 hover:bg-green-600 hover:text-white active:bg-green-700"
              onClick={() => checkout()}
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
