import React, { useState } from 'react';
import { useGetProductsByUserId } from '../../hooks/useGetProducts';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';

import { useSelector } from 'react-redux';

const ProductListing = ({
  userData: { id },
  editListingHandler,
  setListingId,
}) => {
  const login = useSelector((state) => state.login);

  const userListings = useGetProductsByUserId(id);

  const displayListings = userListings.map((listing, i) => {
    const productDescription = listing.productDescription
      .split('')
      .splice(0, 100)
      .join('');

    return (
      <div
        className="flex  flex-col border-b-2 border-neutral-50 py-4 font-light "
        key={Number(new Date() * listing.id)}
        onClick={(e) => {
          console.log(e.target);
          editListingHandler();
          setListingId(listing.id);
        }}
      >
        <div className="mt-12 flex justify-between">
          <img
            src={`http://127.0.0.1:8000/${listing.featuredImage}`}
            alt="listed product"
            className="h-full w-36"
          />

          <p className=" ">{listing.productTitle}</p>

          <p className="w-64 shrink">{productDescription}...</p>

          <p className="flex">{`${listing.price} ${listing.currency}`}</p>
        </div>
        {login && (
          <div className="flex gap-2 place-self-end">
            <span className="my-4 flex cursor-pointer justify-center gap-2  rounded-md py-2 px-4 text-sm font-normal hover:bg-green-500 hover:text-white active:bg-green-800">
              <PencilAltIcon className="h-5 w-5" /> Edit Listing
            </span>
            <span className="my-4 flex cursor-pointer justify-center gap-2  rounded-md py-2 px-4 text-sm font-normal text-red-600 hover:bg-red-500 hover:text-white active:bg-red-800">
              <TrashIcon className="h-5 w-5" /> Delete Listing
            </span>
          </div>
        )}
      </div>
    );
  });
  return (
    <>
      <div className="flex h-[50vh] flex-col">
        <div className=" flex justify-between border-b-2 border-neutral-100 bg-neutral-50 py-4 px-8 font-light">
          <h3>Listing Image</h3>
          <h3> Listing Title</h3>
          <h3>Listing Description</h3>
          <h3>Listing Price</h3>
        </div>
        <div className="overflow-auto">{displayListings}</div>
      </div>
    </>
  );
};
export default ProductListing;
