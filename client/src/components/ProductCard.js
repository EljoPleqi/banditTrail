import React from 'react';
import Button from './Button';
import productImg from '../img/full_2022_spectral-cf-9_3190_gr-gr_P5.png';

const ProductCard = ({ productData }) => {
  const displayData = productData.map((data, i) => (
    <a
      href="/product-overview"
      className="hover:shadow-md hover:scale-105 hover:transition-all"
      key={i}
    >
      <div className="flex flex-col px-5 py-5 min-h-full bg-white">
        <div>
          <img src={productImg} alt="" className="object-cover" />
        </div>
        <div className="py-5">
          <p>{data.name}</p>
          <div className="flex items-center  justify-between pt-5">
            <p>{`${data.price} ${data.currency}`}</p>
            <p>Condition: {`${data.details.new ? 'New' : 'Used'}`}</p>
          </div>
          {/* <p className="pt-5">Type: {data.details.type}</p>
        <p className="pt-5">Size: {data.details.size}</p> */}
        </div>
      </div>
    </a>
  ));
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 py-6">{displayData}</div>
    </div>
  );
};

export default ProductCard;
