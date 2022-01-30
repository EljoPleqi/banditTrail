import React, { useState } from 'react';
import productImg from '../../img/full_2022_spectral-cf-9_3190_gr-gr_P5.png';

const ProductInCart = () => {
  const [quantity, setQuantity] = useState(1);

  const reduce = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const increase = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="flex flex-col items-center mt-6 gap-8">
      <div className="flex items-center gap-12 bg-gray-200 h-48 w-[47rem] rounded-lg">
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
  );
};
export default ProductInCart;
