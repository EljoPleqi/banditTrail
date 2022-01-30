import React from 'react';
import img from '../img/miguel-mendes-EvrfZ9bAtY4-unsplash.jpg';
import AddToCartButton from '../components/cart/AddToCartButton';
import ProductInCart from '../components/cart/ProductInCart';

const CartPage = () => {
  return (
    <div className="grid grid-cols-cart">
      <ProductInCart />
      <div
        className="h-screen bg-cover text-white flex flex-col justify-end items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mb-16 flex flex-col items-center  p-12">
          <h1 className="divide-solid divide-x-2 divide-gray-500">
            Lorem Ispum
          </h1>

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
