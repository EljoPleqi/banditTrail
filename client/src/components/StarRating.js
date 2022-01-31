import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingVal}
              onClick={() => setRating(ratingVal)}
            />
            <StarIcon
              className={`w-6 h-6 hover:fill-yellow-500 cursor-pointer ${
                rating >= ratingVal ? 'fill-yellow-500' : ''
              } `}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
