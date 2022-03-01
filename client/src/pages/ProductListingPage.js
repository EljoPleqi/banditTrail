import React from 'react';
import ListingForm from '../components/ProductListingForm/ListingForm';
import listingImg from '../img/lorenzo-cerato-1Mdth1sVDbg-unsplash.webp';

const ProductListingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-neutral-500 bg-cover py-40 bg-blend-overlay "
      style={{ backgroundImage: `url(${listingImg})` }}
    >
      <ListingForm />
    </div>
  );
};

export default ProductListingPage;
