import React from 'react';
import { Link } from 'react-router-dom';

function Button({ buttonText, destination, hover }) {
  return (
    <Link
      to={`${destination}`}
      className={`rounded-lg border-2 border-white px-10 py-3 text-lg font-medium tracking-wider text-white ${hover}`}
    >
      {buttonText}
    </Link>
  );
}

export default Button;
