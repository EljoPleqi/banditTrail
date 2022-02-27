import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TrashIcon, UserAddIcon } from '@heroicons/react/outline';
import { setRemoveFromCart, setEmptyCart } from '../../features/cart';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const displayCart = cart.map((item, i) => {
    return (
      <div
        className="mt-12 flex items-center justify-between border-b-2 border-neutral-100 pb-8"
        key={i}
      >
        <img
          src={`http://127.0.0.1:8000/${item.featuredImage}`}
          alt="listed product"
          className="h-full w-12 md:w-36"
        />

        <p className="hidden md:block ">{item.productTitle}</p>

        <p className="flex">{`${item.price} ${item.currency}`}</p>
        <span
          className="my-4 flex cursor-pointer items-center justify-center gap-2  rounded-md py-2 px-4 text-sm font-normal 
          text-red-600 hover:bg-red-500 hover:text-white active:bg-red-800"
          onClick={() => {
            dispatch(setRemoveFromCart(i));
          }}
        >
          <TrashIcon className="h-5 w-5" /> Remove Item
        </span>
      </div>
    );
  });

  return (
    <div className="mt-16 flex flex-col px-8">
      <div className=" flex gap-12 border-b-2 border-neutral-100 bg-neutral-50 py-4 px-8 font-light lg:gap-44">
        <h3>Product Image</h3>
        <h3> Product Title and Price </h3>
      </div>
      <div className="overflow-auto">{displayCart}</div>
      <span
        className="my-4 mx-8 flex w-64 cursor-pointer items-center justify-center gap-2 place-self-end rounded-md py-2 px-4 text-sm font-normal text-red-600 hover:bg-red-500
         hover:text-white active:bg-red-800"
        onClick={() => dispatch(setEmptyCart())}
      >
        <TrashIcon className="h-6 w-6" />
        Empty Cart
      </span>
    </div>
  );
};

export default Cart;
