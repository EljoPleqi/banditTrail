import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <Link to={'/list-product/forSale'}>
        <button className="bg-neutral-800 text-white">
          List your bike or Gear for sale
        </button>
      </Link>
    </div>
  );
};

export default UserDashboard;
