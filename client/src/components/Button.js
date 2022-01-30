import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className="mt-5">
      <Link
        to="/product-overview"
        className="bg-neutral-700 text-white px-8 py-4 rounded-md"
      >
        View Product
      </Link>
    </div>
  );
}

export default Button;
