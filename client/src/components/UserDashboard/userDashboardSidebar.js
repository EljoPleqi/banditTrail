import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/login';
import { setNotification } from '../../features/notifications';
import {
  SwitchHorizontalIcon,
  TagIcon,
  MapIcon,
  CogIcon,
  BellIcon,
  InboxInIcon,
  ArrowLeftIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const UserDashboardSidebar = ({
  userData: { avatar, username },
  setSettingsToggled,
  settingsToggled,
}) => {
  const dispatch = useDispatch();
  const [inActive, setInactive] = useState(true);
  const [usernameText, setUsernameText] = useState(false);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  if (logout) {
    localStorage.clear();
    dispatch(setLogin(false));
    navigate('/');
  }

  return (
    <>
      <div className="hidden h-screen flex-col gap-40 bg-neutral-100 px-4 pt-12 font-normal lg:flex ">
        <div className=" flex w-full flex-col justify-center border-b-2 border-solid border-neutral-200">
          <Link to={'/list-product/forSale'}>
            <div className="hover:bg-banditYellow-600  flex items-center gap-2 py-2  px-2  hover:border-2  hover:border-black">
              <TagIcon className="h-6 w-6" /> <p>List Product For Sale</p>
            </div>
          </Link>
          <div className="hover:bg-banditYellow-600  flex cursor-pointer items-center gap-2 py-2  px-2 hover:border-2 hover:border-black">
            <SwitchHorizontalIcon className="h-6 w-6" />
            <p>Trade With Other Riders</p>
          </div>
          <Link to={'/my-trails/add-new-trail'}>
            <div className="hover:bg-banditYellow-600  flex items-center gap-2 py-2  px-2 hover:border-2 hover:border-black">
              <MapIcon className="h-6 w-6" />
              <p>Add A New Trail</p>
            </div>
          </Link>
        </div>
        <div className="flex  w-full flex-col justify-center border-b-2 border-solid border-neutral-200">
          <Link to={'/my-trails/add-new-trail'}>
            <div className="hover:bg-banditYellow-600  flex items-center gap-2 py-2  px-2 hover:border-2 hover:border-black">
              <BellIcon className="h-6 w-6" />
              <p>Notifications</p>
            </div>
          </Link>
          <Link to={'/my-trails/add-new-trail'}>
            <div className="hover:bg-banditYellow-600  flex items-center gap-2 py-2  px-2 hover:border-2 hover:border-black">
              <InboxInIcon className="h-6 w-6" />
              <p>Inbox</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-items-end gap-2 ">
          <div>
            <div
              className="hover:bg-banditYellow-600  flex cursor-pointer items-center gap-2 py-2  px-2 hover:border-2 hover:border-black"
              onClick={() => {
                setSettingsToggled(!settingsToggled);
              }}
            >
              {settingsToggled ? (
                <span className="flex items-center justify-center gap-2">
                  <ArrowLeftIcon className="h-6 w-6" />
                  Back to Dashboard
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <CogIcon className="h-6 w-6" /> <p>Account Settings</p>
                </span>
              )}
            </div>
            <span
              className="hover:bg-banditOrange-500 active:bg-banditOrange-800 flex cursor-pointer items-center gap-2 py-2 px-2 hover:border-2 hover:border-black hover:text-white"
              onClick={() => {
                setLogout(true);
                dispatch(setNotification(true));
                setTimeout(() => {
                  dispatch(setNotification(false));
                }, 3000);
              }}
            >
              <LogoutIcon className="h-6 w-6" /> log out
            </span>
          </div>
          {/* <div
            className={` bg-banditYellow-600 flex cursor-pointer items-center   gap-4 p-2`}
            onClick={() => {
              setInactive(!inActive);
              setUsernameText(!usernameText);
            }}
          >
            <img
              src={` http://localhost:8000/${avatar}`}
              alt=""
              className={`box-border h-16 w-16  rounded-full ${
                inActive ? 'bg-banditGreen-500' : 'place-self-end bg-white'
              } object-cover p-1 shadow-sm`}
            />
            <p>{username}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserDashboardSidebar;
