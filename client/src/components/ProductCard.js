import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const productData = useSelector((state) => state.products);
  // const { id } = useSelector((state) => state.products.id);

  // const id = productData.at(-1).id;
  // console.log(id);
  const displayData = productData.map((data, i) => (
    <Link
      to={`products/${data.id}`}
      className="hover:shadow-md hover:scale-105 hover:transition-all"
      key={i}
    >
      <div className="flex flex-col px-5 py-5 min-h-full bg-white">
        <div>
          <img
            src={`http://127.0.0.1:3007/${data.featuredImage}`}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="py-5">
          <p>{data.productTitle}</p>
          <div className="flex items-center  justify-between pt-5">
            <p>{`${data.price} ${data.currency}`}</p>
            {/* <p>Condition: {`${data.details.new ? 'New' : 'Used'}`}</p> */}
          </div>
        </div>
      </div>
    </Link>
  ));

  console.log(productData);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 py-6">{displayData}</div>
    </div>
  );
};

export default ProductCard;
