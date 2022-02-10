import React, { useEffect, useState } from 'react';
import profileCover from '../img/kay-liedl-zV3cZTAQ0xo-unsplash.jpg';
import UserDashboardSidebar from '../components/userDashboard/userDashboardSidebar';
import ProductListing from '../components/userDashboard/ProductListing';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const [loaded, setLoaded] = useState(false);

  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    setLoaded(true);
  }, [userData]);

  return (
    <div className="grid-cols-oneFour grid">
      <UserDashboardSidebar userData={loaded ? userData : 'loading...'} />
      <div className="flex flex-col gap-4 ">
        <div
          className="h-64   bg-slate-500 bg-cover bg-center"
          style={{ backgroundImage: `url(${profileCover})` }}
        ></div>
        <div className="grid-cols-twoOne grid">
          <div className=" border-r-2 border-solid  border-neutral-100 p-8 ">
            <div className="mb-4 flex justify-end ">
              <h2 className="">Active Listings</h2>
            </div>
            <ProductListing userData={loaded ? userData : 'loading...'} />
          </div>
          <div className="p-8">Recently sold</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
