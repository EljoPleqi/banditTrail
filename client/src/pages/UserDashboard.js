import React, { useEffect, useState } from 'react';
import SettingsDashboard from '../components/userDashboard/userSettings/SettingsDashboard';
import profileCover from '../img/kay-liedl-zV3cZTAQ0xo-unsplash.jpg';
import UserDashboardSidebar from '../components/userDashboard/userDashboardSidebar';
import ProductListing from '../components/userDashboard/ProductListing';
import Modal from '../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { PencilAltIcon } from '@heroicons/react/outline';

const UserDashboard = ({ setListingModal, listingModal, setSearchModal }) => {
  const [loaded, setLoaded] = useState(false);
  const [listingId, setListingId] = useState('');
  const [settingsToggled, setSettingsToggled] = useState(false);

  const userData = useSelector((state) => state.userData);

  const editListingHandlers = () => {
    setListingModal(true);
    console.log(listingId);

    console.log('OPEN');
  };
  useEffect(() => {
    setLoaded(true);
  }, [userData]);

  return (
    <div className="grid-cols-oneFour grid">
      <UserDashboardSidebar
        userData={loaded ? userData : 'loading...'}
        setSettingsToggled={setSettingsToggled}
        settingsToggled={settingsToggled}
      />
      {listingModal ? (
        <Modal
          setListingModal={setListingModal}
          listingModal={listingModal}
          setSearchModal={setSearchModal}
          id={listingId}
        />
      ) : (
        <div className="flex flex-col gap-4 ">
          {settingsToggled ? (
            <SettingsDashboard />
          ) : (
            <>
              <div
                className="h-64   bg-slate-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${profileCover})` }}
              ></div>
              <div className="grid-cols-twoOne grid">
                <div className=" border-r-2 border-solid  border-neutral-100 p-8 ">
                  <div className="mb-6 flex justify-end   gap-4">
                    <p className="">Active Listings</p> <span>|</span>{' '}
                    <p className="flex cursor-pointer justify-center gap-2">
                      Edit Listings <PencilAltIcon className="h-6 w-6" />{' '}
                    </p>
                  </div>
                  <ProductListing
                    userData={loaded ? userData : 'loading...'}
                    editListingHandler={editListingHandlers}
                    setListingId={setListingId}
                  />
                </div>
                <div className="p-8">Recently sold</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
