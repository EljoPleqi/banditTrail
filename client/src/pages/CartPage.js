import React, { useState } from 'react';
import img from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';
import productImg from '../img/full_2022_spectral-cf-9_3190_gr-gr_P5.png';
import AddToCardButton from '../components/cart/AddToCardButton';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const reduce = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const increase = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="grid grid-cols-cart">
      <div className="flex flex-col items-center mt-6 gap-8">
        <div className="flex items-center gap-12 bg-gray-200 h-40 w-[48rem] rounded-lg">
          <img src={productImg} alt="" className="h-24 pl-6" />
          <h2>Product titles</h2>
          <p>Short description</p>
          <div className="flex flex-col items-center justify-center">
            <h5>Quantity</h5>
            <div className="flex gap-2 items-center">
              <p className="cursor-pointer" onClick={reduce}>
                -
              </p>
              <p className="bg-white px-3 py-1">{quantity}</p>
              <p className="cursor-pointer" onClick={increase}>
                +
              </p>
            </div>
          </div>
          <h3>Price</h3>
        </div>
      </div>
      <div
        className="h-screen bg-cover text-white flex flex-col justify-end items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mb-16 flex flex-col items-center  p-12">
          <h1 className="divide-solid divide-x-2 divide-gray-500">
            Lorem Ispum
          </h1>

          <h3>PRICE</h3>
          <AddToCardButton />
          <a href="/Login" className="hover:text-orange-500">
            <h2>Apply Promo Code</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
