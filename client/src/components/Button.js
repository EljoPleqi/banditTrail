import React from 'react';
import { Link } from 'react-router-dom';

function Button({ buttonText, destination, hover }) {
  return (
    <Link
      to={`${destination}`}
      className={` border-2 border-white px-8 py-3  font-medium tracking-wider text-white ${hover}`}
    >
      {buttonText}
    </Link>
  );
}

export default Button;
