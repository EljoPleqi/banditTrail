import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SwitchHorizontalIcon,
  TagIcon,
  MapIcon,
  CogIcon,
  BellIcon,
  InboxInIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';

const UserDashboardSidebar = ({ userData: { avatar, username } }) => {
  const [inActive, setInactive] = useState(true);
  const [usernameText, setUsernameText] = useState(false);
  return (
    <>
      <div className=" flex h-screen flex-col gap-40 bg-neutral-100 px-4 pt-12 font-normal ">
        <div className=" flex w-full flex-col justify-center border-b-2 border-solid border-neutral-200">
          <Link to={'/list-product/forSale'}>
            <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
              <TagIcon className="h-6 w-6" /> <p>List Product For Sale</p>
            </div>
          </Link>
          <div className="flex cursor-pointer items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <SwitchHorizontalIcon className="h-6 w-6" />
            <p>Trade With Other Riders</p>
          </div>
          <Link to={'/my-trails/add-new-trail'}>
            <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
              <MapIcon className="h-6 w-6" />
              <p>Add A New Trail</p>
            </div>
          </Link>
        </div>
        <div className="flex  w-full flex-col justify-center border-b-2 border-solid border-neutral-200">
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
        </div>
        <div className="flex flex-col justify-items-end gap-2 ">
          <div>
            <Link to={'/my-trails/add-new-trail'}>
              <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
                <CogIcon className="h-6 w-6" />
                <p>Account Settings</p>
              </div>
            </Link>
          </div>
          <div
            className=" flex cursor-pointer items-center gap-4 rounded-full bg-neutral-300 p-1"
            onClick={() => {
              setInactive(!inActive);
              setUsernameText(!usernameText);
            }}
          >
            <img
              src={`http://127.0.0.1:8000/${avatar}`}
              alt=""
              className={`box-border h-16 w-16  rounded-full ${
                inActive ? 'bg-green-500' : 'bg-white'
              } object-cover p-1 shadow-sm`}
            />
            <p>
              {usernameText ? (
                <span className="flex gap-2">
                  Slide to log out <ArrowRightIcon className="h-6 w-6" />
                </span>
              ) : (
                username
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardSidebar;
