import React from 'react';
import img from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';
import AddToCartButton from '../components/cart/AddToCartButton';

const CartPage = () => {
  return (
    <div className="grid-cols-cart grid">
      <div
        className="flex h-screen flex-col items-center justify-end bg-cover text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mb-16 flex flex-col items-center  p-12">
          <h1 className="">Lorem Ispum</h1>

          <h3>PRICE</h3>
          <AddToCartButton />
          <a href="/Login" className="hover:text-orange-500">
            <h2>Apply Promo Code</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
