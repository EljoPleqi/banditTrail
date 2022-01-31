import React from 'react';
import StarRating from './StarRating';

const CustomerReviewCard = () => {
  return (
    <div className="flex flex-col gap-6 ml-4">
      <StarRating />
      <div className="flex flex-col gap-2">
        <h3>This was a good seller</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
