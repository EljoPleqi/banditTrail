import React from 'react';
import { Link } from 'react-router-dom';

const PreHeader = () => {
  return (
    <div className=" bg-neutral-900">
      <ul className="flex h-8 flex-row-reverse items-center gap-4 px-5 font-light text-white">
        <li className="text-333 cursor-pointer text-sm hover:text-orange-500 active:text-green-600 ">
          <Link to="/xuser-dashboard">Log In</Link>
        </li>
        <li className="text-333 cursor-pointer text-sm hover:text-orange-500 active:text-green-600 ">
          <Link to="signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default PreHeader;
