import React from 'react';
import Button from './Button';

const ProductCard = ({ productData }) => {
  const displayData = productData.map((data, i) => (
    <div
      className="flex flex-col px-5 mx-5 rounded-xl md:flex  bg-slate-50"
      key={i}
    >
      <div>
        <img src={data.productImage} alt="" />
      </div>
      <div className="py-5">
        <p>{data.name}</p>
        <div className="flex  pt-5">
          <p>{`${data.price} ${data.currency}`}</p>
        </div>
        <p className="pt-5">Type: {data.details.type}</p>
        <p className="pt-5">Size: {data.details.size}</p>
        <p className="pt-5">
          Condition: {`${data.details.new ? 'New' : 'Used'}`}
        </p>
      </div>
      <Button className="" />
    </div>
  ));
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 py-32">
        {displayData} {displayData}
      </div>
    </div>
  );
};

export default ProductCard;
