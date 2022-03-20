import React from 'react';
import ListingForm from '../components/ProductListingForm/ListingForm';
import listingImg from '../img/tim-foster-gLltPGhWpSY-unsplash.jpg';

const ProductListingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <img
          src={listingImg}
          alt=""
          className="hidden h-full max-w-3xl object-cover object-bottom lg:inline-block"
        />
      </div>
      <ListingForm />
    </div>
  );
};

export default ProductListingPage;
