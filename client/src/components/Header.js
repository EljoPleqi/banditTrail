import React from 'react';
import { ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center bg-white h-20 px-5 justify-between">
      <div className="px-5 logo text-3xl font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <div className="navigation flex ">
        <ul className="flex items-center ">
          <li className="px-5 text-lg text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            nav-item
          </li>
          <li className="px-5 text-lg text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            <SearchIcon className="w-5 h-5" />
          </li>
          <li className="px-5 text-lg text-333 hover:text-orange-500 active:text-green-600 cursor-pointer ">
            <Link to="/cart" className="flex items-center gap-2">
              Cart <ShoppingCartIcon className="w-5 h-5" />
            </Link>
          </li>
          <div className="flex gap-0">
            <li className="px-5 text-lg text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
              <Link to="/Login">Log In</Link>
            </li>
            <li className="px-5 text-lg text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
              <Link to="signup">Sign up</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
