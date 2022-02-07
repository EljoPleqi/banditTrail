import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  SwitchHorizontalIcon,
  UploadIcon,
  PencilAltIcon,
} from '@heroicons/react/outline';
import profileCover from '../img/kay-liedl-zV3cZTAQ0xo-unsplash.jpg';
import profilePicture from '../img/clement-delhaye-ZGNKvarK1og-unsplash.jpg';

const UserDashboard = () => {
  return (
    <div className="grid-cols-oneFour grid h-screen ">
      <div className="flex flex-col gap-2 bg-neutral-100 px-4 pt-12 ">
        <div className="flex items-center gap-2  divide-solid rounded-md py-2 px-2 hover:bg-neutral-300">
          <HomeIcon className="h-6 w-6" />
          <p>Rider Profile</p>
        </div>
        <Link to={'/list-product/forSale'}>
          <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <UploadIcon className="h-6 w-6" /> <p>List Product For Sale</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
          <SwitchHorizontalIcon className="h-6 w-6" />
          <p>Trade With Other Riders</p>
        </div>
        <Link to={'/my-trails/add-new-trail'}>
          <div className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-neutral-300">
            <PencilAltIcon className="h-6 w-6" />
            <p>Add A New Trail</p>
          </div>
        </Link>
        <div className=" flex items-center gap-4 rounded-full bg-neutral-200 p-1">
          <img
            src={profilePicture}
            alt=""
            className="box-border h-16 w-16 rounded-full bg-white object-cover p-1 shadow-sm"
          />
          <p>Riders Username</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div
            className="h-72 bg-slate-500 bg-cover bg-center"
            style={{ backgroundImage: `url(${profileCover})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
