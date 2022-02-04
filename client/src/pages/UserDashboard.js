import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center gap-4">
      <Link to={'/list-product/forSale'}>
        <button className="bg-neutral-800 text-white p-4">
          List Your Bike Or Gear Sor Sale
        </button>
      </Link>
      <Link to={'/my-trails/add-new-trail'}>
        <button className="bg-neutral-800 text-white p-4">Add New Trail</button>
      </Link>
    </div>
  );
};

export default UserDashboard;
