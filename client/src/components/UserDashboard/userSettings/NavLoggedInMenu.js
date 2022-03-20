import React from 'react';
import { Link } from 'react-router-dom';
import {
  SwitchHorizontalIcon,
  TagIcon,
  MapIcon,
  BellIcon,
  InboxInIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

const NavLoggedInMenu = () => {
  const { avatar, username } = useSelector((state) => state.userData);
  return (
    <div
      className="
  flex flex-col items-center gap-2 bg-neutral-50 p-8 shadow-sm"
    >
      <ul>
        <li className=" hover:text-banditbanditGreen-500 active:text-banditGreen-600 cursor-pointer border-r-2 border-neutral-100 px-2">
          <Link to="/cart" className="flex items-center gap-2">
            <ShoppingCartIcon className="h-6 w-6" />
            Cart
          </Link>
        </li>
        <Link to={'/list-product/forSale'}>
          <li className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <TagIcon className="h-6 w-6" /> <p>List Product For Sale</p>
          </li>
        </Link>
        <li className="flex cursor-pointer items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
          <SwitchHorizontalIcon className="h-6 w-6" />
          <p>Trade With Other Riders</p>
        </li>
        <Link to={'/my-trails/add-new-trail'}>
          <li className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <MapIcon className="h-6 w-6" />
            <p>Add A New Trail</p>
          </li>
        </Link>
        <Link to={'/my-trails/add-new-trail'}>
          <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <BellIcon className="h-6 w-6" />
            <p>Notifications</p>
          </div>
        </Link>
        <Link to={'/my-trails/add-new-trail'}>
          <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <InboxInIcon className="h-6 w-6" />
            <p>Inbox</p>
          </div>
        </Link>
        <Link to={`/user-dashboard/${username}`}>
          <li className="flex items-center gap-4">
            <img
              src={` http://localhost:8000/${avatar}`}
              alt=""
              className=" bg-banditGreen-500 h-12 w-12 rounded-full object-cover p-0.5"
            />
            <p>{username}</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavLoggedInMenu;
