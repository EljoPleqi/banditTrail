import React from 'react';
import { useGetProductsByProdcutId } from '../../hooks/useGetProducts';
import { PencilAltIcon } from '@heroicons/react/outline';

const ListingModal = ({ id }) => {
  const {
    productTitle,
    price,
    productDescription,
    featuredImage,
    ridingStyle,
  } = useGetProductsByProdcutId(id);

  return (
    <div className="flex  max-w-[52rem] gap-8 rounded-md bg-white p-8 shadow-md">
      <img
        src={`http://127.0.0.1:8000/${featuredImage}`}
        alt="product"
        className="h-44 "
      />
      <div className="flex flex-col items-start gap-5 ">
        <span className="flex justify-center gap-2">
          <p>{productTitle} </p>
          <PencilAltIcon className="h-6 w-6" />
        </span>
        <span className="flex justify-center gap-2">
          <p>{productDescription}</p>
          <PencilAltIcon className="h-6 w-6" />
        </span>
        <span className="flex justify-center gap-2">
          <p>{price}</p>
          <PencilAltIcon className="h-6 w-6" />
        </span>
        <span className="flex justify-center gap-2">
          <p>{ridingStyle}</p>
          <PencilAltIcon className="h-6 w-6" />
        </span>
      </div>
    </div>
  );
};

export default ListingModal;
