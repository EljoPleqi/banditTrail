import React, { useState } from 'react';
import ProductDetailsForm from './ProductDetailsForm';
import ProductForm from './ProductForm';
const ListingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  //

  return (
    <div className="flex items-center justify-center">
      {!submitted ? (
        <ProductForm submitted={submitted} setSubmitted={setSubmitted} />
      ) : (
        <ProductDetailsForm />
      )}
      <ProductDetailsForm />
    </div>
  );
};

export default ListingForm;
