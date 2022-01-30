import React from 'react';
import { Link } from 'react-router-dom';

const PreHeader = () => {
  return (
    <div className=" bg-neutral-900">
      <ul className="flex flex-row-reverse text-white px-5 h-8 items-center gap-4 font-light">
        <li className="text-sm text-333 hover:text-orange-500 active:text-green-600 cursor-pointer ">
          <Link to="/Login">Log In</Link>
        </li>
        <li className="text-sm text-333 hover:text-orange-500 active:text-green-600 cursor-pointer ">
          <Link to="signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default PreHeader;
