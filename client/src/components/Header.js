import React from 'react';

import {
  ShoppingCartIcon,
  SearchIcon,
  LoginIcon,
  UserGroupIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({ setModalOpen, setSearchModal }) => {
  const loggedIn = useSelector((state) => state.login);
  const { avatar, username } = useSelector((state) => state.userData);
  return (
    <>
      <div className=" flex h-16 items-center  bg-white px-5">
        <nav className="flex w-full items-center justify-between ">
          <div className="logo px-5 text-3xl font-bold">
            <Link to="/">BANDIT TRAIL</Link>
          </div>

          <ul className=" flex justify-center">
            <div className="flex items-center">
              <li className=" cursor-pointer border-r-2 border-neutral-100 px-5  hover:text-orange-500 active:text-green-600">
                <Link
                  to="/about-us"
                  className="flex items-center justify-center gap-2"
                >
                  About Us <UserGroupIcon className="h-5 w-5" />
                </Link>
              </li>
              <li className=" cursor-pointer border-r-2 border-neutral-100 px-5  hover:text-orange-500 active:text-green-600">
                <Link
                  to="/products/all-products"
                  className="flex items-center justify-center gap-2"
                >
                  Items For Sale <CollectionIcon className="h-5 w-5" />
                </Link>
              </li>
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
              <Link to={`/user-dashboard/${username}`}>
                <li>
                  <img
                    src={`http://127.0.0.1:8000/${avatar}`}
                    alt=""
                    className=" h-12 w-12 rounded-full bg-green-500 object-cover p-0.5"
                  />
                </li>
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
