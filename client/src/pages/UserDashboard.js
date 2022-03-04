import React, { useState } from 'react';
import SettingsDashboard from '../components/UserDashboard/userSettings/SettingsDashboard';
import profileCover from '../img/jonny-neuenhagen-WA2jzef4foQ-unsplash.webp';
import Popup from '../components/notifications/Popup';
import UserDashboardSidebar from '../components/UserDashboard/userDashboardSidebar';
import ProductListing from '../components/UserDashboard/ProductListing';
import SoldItems from '../components/UserDashboard/SoldItems';
import Modal from '../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { CogIcon } from '@heroicons/react/outline';

const UserDashboard = ({ setListingModal, listingModal, setSearchModal }) => {
  const [listingId, setListingId] = useState('');
  const [settingsToggled, setSettingsToggled] = useState(false);
  const [switchSub, setSubModal] = useState(false);

  const userData = useSelector((state) => state.userData);
  const notification = useSelector((state) => state.notification);

  const editListingHandlers = () => {
    setListingModal(true);
  };

  return (
    <>
      {notification && (
        <Popup
          type={'bg-green-500 p-8 text-center text-white transition-all'}
          message={'Welcome Back 🤘'}
        />
      )}

      <div className="grid-cols-oneFour lg:grid">
        <UserDashboardSidebar
          userData={userData}
          setSettingsToggled={setSettingsToggled}
          settingsToggled={settingsToggled}
        />
        {switchSub && <Modal switchSub={switchSub} setSubModal={setSubModal} />}
        {listingModal && (
          <Modal
            setListingModal={setListingModal}
            listingModal={listingModal}
            setSearchModal={setSearchModal}
            id={listingId}
          />
        )}

        <div className="flex flex-col gap-4">
          <div className="flex  justify-end  p-4 lg:hidden">
            <div
              className="flex justify-center gap-2"
              onClick={() => setSettingsToggled(!settingsToggled)}
            >
              <span>Settings</span> <CogIcon className="h-6 w-6" />
            </div>
          </div>
          {settingsToggled ? (
            <SettingsDashboard userData={userData} setSubModal={setSubModal} />
          ) : (
            <>
              <div
                className="hidden h-64 bg-slate-500  bg-cover bg-center md:block"
                style={{ backgroundImage: `url(${profileCover})` }}
              ></div>
              <div className="lg:grid-cols-twoOne grid">
                <div className=" border-r-2 border-solid  border-neutral-100 p-4 ">
                  <div className="mb-6 flex justify-end gap-4 ">
                    <p className="">Active Listings</p>
                  </div>

                  <ProductListing
                    editListingHandler={editListingHandlers}
                    setListingId={setListingId}
                    userData={userData}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6 flex justify-end gap-4">
                    Recently sold
                  </div>
                  <SoldItems UserId={userData.id} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
