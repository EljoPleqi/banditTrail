import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Link, Router } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header-container flex shadow-md	 items-center bg-slate-50 h-24 px-5 justify-between">
      <div className="px-5 logo text-3xl font-bold">
        <Link to="/">LOGO</Link>
      </div>
      <div className="navigation flex  ">
        <ul className="flex ">
          <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            nav-item
          </li>
          <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            nav-item
          </li>
          <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer flex gap-2">
            Cart <ShoppingCartIcon className="w-6 h-6" />
          </li>
          <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            <Link to="/Login">Log In</Link>
          </li>
          <li className="px-5 text-xl text-333 hover:text-orange-500 active:text-green-600 cursor-pointer">
            <Link to="signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
