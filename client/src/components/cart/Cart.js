import React from 'react';
import { useSelector } from 'react-redux';
import { TrashIcon } from '@heroicons/react/outline';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const displayCart = cart.map((item, i) => {
    return (
      <div className="mt-12 flex justify-between" key={i}>
        <img
          src={`http://127.0.0.1:8000/${item.featuredImage}`}
          alt="listed product"
          className="h-full w-36"
        />

        <p className=" ">{item.productTitle}</p>

        <p className="flex">{`${item.price} ${item.currency}`}</p>
        <span
          className="my-4 flex cursor-pointer items-center justify-center gap-2  rounded-md py-2 px-4 text-sm font-normal text-red-600 hover:bg-red-500 hover:text-white active:bg-red-800"
          onClick={() => {
            displayCart.splice(i);
          }}
        >
          <TrashIcon className="h-5 w-5" /> Remove Item
        </span>
      </div>
    );
  });

  return (
    <div className="mt-16 flex flex-col px-8">
      <div className=" flex justify-between border-b-2 border-neutral-100 bg-neutral-50 py-4 px-8 font-light">
        <h3>Listing Image</h3>
        <h3> Listing Title</h3>
        <h3>Listing Price</h3>
      </div>
      <div className="overflow-auto">{displayCart}</div>
    </div>
  );
};

export default Cart;
