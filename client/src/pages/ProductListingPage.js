import React from 'react';
import ListingForm from '../components/ProductListingForm/ListingForm';
import listingImg from '../img/lorenzo-cerato-1Mdth1sVDbg-unsplash.jpg';

const ProductListingPage = () => {
  return (
    <div
      className="bg-neutral-500 flex flex-col items-center justify-center bg-cover bg-blend-overlay py-40 "
      style={{ backgroundImage: `url(${listingImg})` }}
    >
      <ListingForm />
    </div>
  );
};

export default ProductListingPage;
