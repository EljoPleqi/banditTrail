import React from 'react';

import {
  ShoppingCartIcon,
  SearchIcon,
  LoginIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ setModalOpen, setSearchModal }) => {
  const loggedIn = useSelector((state) => state.login);

  return (
    <>
      <div className=" flex h-16 items-center  bg-white px-5">
        <nav className="flex w-full items-center justify-between ">
          <div className="logo px-5 text-3xl font-bold">
            <Link to="/">BANDIT TRAIL</Link>
          </div>

          <ul className=" flex justify-center">
            <div className="flex items-center">
              <li
                className=" flex cursor-pointer items-center gap-2 px-5   hover:text-orange-500  active:text-green-600"
                onClick={() => {
                  setSearchModal(true);
                }}
              >
                Search <SearchIcon className="h-5 w-5" />
              </li>
              <li className=" cursor-pointer border-r-2 border-neutral-100 px-5  hover:text-orange-500 active:text-green-600">
                <Link to="/cart" className="flex items-center gap-2">
                  Cart <ShoppingCartIcon className="h-5 w-5" />
                </Link>
              </li>
            </div>

            {loggedIn ? (
              <Link to="/user-dashboard">
                <li className="h-8 w-8 rounded-full bg-green-700"></li>
              </Link>
            ) : (
              <li className=" cursor-pointer px-5  hover:text-orange-500 active:text-green-600 ">
                <Link to="/login" className="flex items-center gap-2">
                  Log in
                  <LoginIcon className="h-5 w-5" />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
