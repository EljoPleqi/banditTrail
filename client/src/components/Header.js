import React from 'react';
import SearchModal from '../components/Search/SearchModal';
import { ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ setSearchModalOpen }) => {
  const loggedIn = useSelector((state) => state.login);

  return (
    <>
      <div className="flex h-16 items-center justify-between bg-white px-5">
        <div className="logo px-5 text-3xl font-bold">
          <Link to="/">BANDIT TRAIL</Link>
        </div>
        <div className="navigation flex ">
          <ul className="flex items-center ">
            <li className="text-333 cursor-pointer px-5 text-lg hover:text-orange-500 active:text-green-600">
              Bikes
            </li>
            <li className="text-333 cursor-pointer px-5 text-lg hover:text-orange-500 active:text-green-600">
              Gear
            </li>
            <li className="text-333 cursor-pointer px-5 text-lg hover:text-orange-500 active:text-green-600">
              Trails
            </li>
            <li
              className="text-333 flex cursor-pointer items-center gap-2 px-5 text-lg hover:text-orange-500 active:text-green-600"
              onClick={() => setSearchModalOpen(true)}
            >
              Search <SearchIcon className="h-5 w-5" />
            </li>
            <li className="text-333 cursor-pointer px-5 text-lg hover:text-orange-500 active:text-green-600 ">
              <Link to="/cart" className="flex items-center gap-2">
                Cart <ShoppingCartIcon className="h-5 w-5" />
              </Link>
            </li>
            {loggedIn ? (
              <Link to="/user-dashboard">
                <li className="h-8 w-8 rounded-full bg-green-700"></li>
              </Link>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
