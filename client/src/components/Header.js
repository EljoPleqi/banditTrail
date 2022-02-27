import React, { useState } from 'react';

import {
  ShoppingCartIcon,
  SearchIcon,
  LoginIcon,
  UserGroupIcon,
  CollectionIcon,
  MenuAlt3Icon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavLoggedInMenu from './UserDashboard/userSettings/NavLoggedInMenu';

const Header = ({ setModalOpen, setSearchModal }) => {
  const [open, setOpen] = useState(false);
  const loggedIn = useSelector((state) => state.login);
  const { avatar, username } = useSelector((state) => state.userData);
  return (
    <>
      <div className=" flex h-16 items-center  bg-white px-5">
        <nav className="flex w-full items-center justify-between ">
          <div className="logo px-5 font-bold md:text-3xl">
            <Link to="/">BANDIT TRAIL</Link>
          </div>
          <MenuAlt3Icon
            className="h-6 w-6 active:bg-neutral-200 lg:hidden"
            onClick={() => setOpen(!open)}
          />

          <ul className=" hidden justify-center md:visible lg:flex">
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
                    src={` https://bandit-trail.herokuapp.com/${avatar}`}
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
      {open && !loggedIn && (
        <div
          className="
          flex flex-col items-center gap-2 bg-neutral-50 p-8 shadow-sm"
        >
          <ul
            className="
          flex flex-col gap-2"
          >
            <li>
              <Link to="/about-us" className="flex items-center  gap-2">
                <UserGroupIcon className="h-5 w-5" /> About Us
              </Link>
            </li>
            <li>
              {' '}
              <Link
                to="/products/all-products"
                className="flex items-center  gap-2"
              >
                <CollectionIcon className="h-5 w-5" /> Items For Sale
              </Link>
            </li>
            <li
              className=" flex cursor-pointer items-center gap-2  hover:text-orange-500  active:text-green-600"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <SearchIcon className="h-5 w-5" /> Search
            </li>

            <li className=" cursor-pointer   hover:text-orange-500 active:text-green-600 ">
              <Link to="/login" className="flex items-center gap-2">
                <LoginIcon className="h-5 w-5" /> Log in
              </Link>
            </li>
          </ul>
        </div>
      )}
      {open && loggedIn && <NavLoggedInMenu />}
    </>
  );
};

export default Header;
