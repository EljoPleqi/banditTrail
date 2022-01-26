import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className="mt-5">
      <Link
        to="/product-overview"
        className="bg-orange-500 px-8 py-4 rounded-lg"
      >
        View Product
      </Link>
    </div>
  );
}

export default Button;
